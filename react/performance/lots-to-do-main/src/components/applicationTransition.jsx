import useTasks from '../lib/use-tasks';
import { initialFilters } from '../features/filters';
import Filters from './filters';
import Tasks from './tasks';
import useFilters, { filterTasks } from '../lib/filter-tasks';
import { useMemo, useTransition } from 'react';

const Application = () => {
  const [tasks] = useTasks();
  const [filters, setFilter] = useFilters(initialFilters);
  const [filterInputs, setFilterInputs] = useFilters(initialFilters);
  const [isPending,startTransition] = useTransition()

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filters),
    [tasks, filters],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterInputs(name, value);
    startTransition(()=> {
      setFilter(name, value); /// we put setState which cause suspence for our component 
    })
  };

  return (
    <main>
      {isPending ? <div>Loading ...</div> : ''}
      <Filters filters={filterInputs} onChange={handleChange} />
      <Tasks tasks={visibleTasks} />
    </main>
  );
};

export default Application;
