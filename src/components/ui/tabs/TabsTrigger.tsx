import clsx from 'clsx';
import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react';

import { createPanelId, createTabId } from './utils';
import { type UseTabsContext } from './TabsContext';

import styles from './style.module.scss';

export type TabsTriggerProps<V extends string> = {
  value: V;
  className?: string;
  children: ReactNode;
};

export function createTabsTrigger<V extends string>(useTabsContext: UseTabsContext<V>) {
  return function TabsTrigger({ value, className, children }: TabsTriggerProps<V>) {
    const { value: valueCurrent, baseId, setValue, triggersRef } = useTabsContext();
    const triggerRef = useRef<HTMLButtonElement>(null);
    const isActive = value === valueCurrent;
    const id = createTabId(baseId, value);
    const panelId = createPanelId(baseId, value);
    const cl = clsx(styles.trigger, isActive && styles.triggerIsActive, className);

    useEffect(() => {
      const triggers = triggersRef.current;
      const trigger = triggerRef.current;

      if (trigger && !triggers.find((trigger) => trigger.value === value)) {
        triggers.push({
          ref: triggerRef,
          value,
        });
      }

      return () => {
        triggersRef.current = triggers.filter((trigger) => trigger.value !== value);
      };
    }, []);

    function handleClick() {
      if (!isActive) {
        setValue(value);
      }
    }

    function setNext() {
      const triggers = triggersRef.current;
      const currentIndex = triggers.findIndex((trigger) => trigger.value === value);
      const nextIndex = (currentIndex + 1) % triggers.length;
      const next = triggers[nextIndex];

      if (next.ref.current) {
        next.ref.current.focus();
        setValue(next.value);
      }
    }

    function setPrev() {
      const triggers = triggersRef.current;
      const currentIndex = triggers.findIndex((trigger) => trigger.value === value);
      const nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
      const next = triggers[nextIndex];

      if (next.ref.current) {
        next.ref.current.focus();
        setValue(next.value);
      }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
      const key = event.key;

      if (key === 'ArrowRight') {
        setNext();
      } else if (key === 'ArrowLeft') {
        setPrev();
      }
    }

    return (
      <button
        id={id}
        className={cl}
        role='tab'
        aria-selected={isActive}
        aria-controls={panelId}
        tabIndex={isActive ? 0 : -1}
        ref={triggerRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {children}
      </button>
    );
  };
}
