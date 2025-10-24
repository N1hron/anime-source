import { TabsList } from './TabsList';
import { createTabsContext } from './TabsContext';
import { createTabsPanel } from './TabsPanel';
import { createTabsRoot } from './TabsRoot';
import { createTabsTrigger } from './TabsTrigger';

type Tabs<V extends string> = {
  Root: ReturnType<typeof createTabsRoot<V>>;
  List: typeof TabsList;
  Trigger: ReturnType<typeof createTabsTrigger<V>>;
  Panel: ReturnType<typeof createTabsPanel<V>>;
};

export function createTabs<V extends string>(): Tabs<V> {
  const [TabsContext, useTabsContext] = createTabsContext<V>();

  const TabsRoot = createTabsRoot<V>(TabsContext);
  const TabsPanel = createTabsPanel<V>(useTabsContext);
  const TabsTrigger = createTabsTrigger<V>(useTabsContext);

  const Tabs = {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Panel: TabsPanel,
  };

  return Tabs;
}
