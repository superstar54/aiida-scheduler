import SchedulerTable from './SchedulerTable';
import SchedulerDetail from './SchedulerDetail';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const plugin = {
  id: 'scheduler',
  title: 'scheduler',
  version: '0.1.0',
  description: 'AiiDA GUI WorkGraph plugin',
  sideBarItems: {
    "scheduler": {"label": "Scheduler",
      "path": "/scheduler",
      "icon": faClock},
  },
  homeItems: {
    "scheduler": {"label": "Scheduler", "path": "/scheduler"},
  },
  routes: {
          "/scheduler": SchedulerTable,
          "/scheduler/:name": SchedulerDetail,
        },
  dataView: {},
};

export default plugin;
