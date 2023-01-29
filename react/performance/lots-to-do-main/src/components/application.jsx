import useTasks from '../lib/use-tasks';
import { initialFilters } from '../features/filters';
import Filters from './filters';
import Tasks from './tasks';
import useFilters, { filterTasks } from '../lib/filter-tasks';
import { useDeferredValue, useMemo } from 'react';

const Application = () => {
  const [tasks] = useTasks();
  const [filters, setFilter] = useFilters(initialFilters);
  const defferedFilters = useDeferredValue(filters)

  const visibleTasks = useMemo(
    () => filterTasks(tasks, defferedFilters),
    [tasks, defferedFilters],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter(name, value);
  };

  return (
    <main>
      { defferedFilters !== filters ? <div>Loading ...</div> : ''}
      <Filters filters={filters} onChange={handleChange} />
      <Tasks tasks={visibleTasks} />
    </main>
  );
};

export default Application;
