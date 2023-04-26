import { createRouter, createWebHashHistory } from "vue-router"
import Statics from '../views/auth/Statics.vue'
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import Reset from '../views/auth/Reset.vue'
import Lock from '../views/auth/Lock.vue'
import Verification from '../views/auth/Verification.vue'
import Error404 from '../views/auth/Error404.vue'
import Error500 from '../views/auth/Error500.vue'
import NewClinic from '../views/clinic/NewClinic.vue'
import EditClinic from '../views/clinic/EditClinic.vue'
import ClinicPage from '../views/clinic/ClinicPage.vue'
import ClinicsList from '../views/clinic/ClinicsList.vue'
import NewPatient from '../views/patient/NewPatient.vue'
import Reports from '../views/patient/Reports.vue'
import NewBooking from '../views/booking/NewBooking.vue'
import General from '../views/booking/General.vue'
import Timeline from '../views/booking/Timeline.vue'


const routes = [
  {
    path: "/statics",
    name: "statics",
    component: Statics
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin 
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup 
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset 
  },
  {
    path: "/lock",
    name: "lock",
    component: Lock 
  },
  {
    path: "/verification",
    name: "verification",
    component: Verification 
  },
  {
    path: "/error404",
    name: "error404",
    component: Error404
  },
  {
    path: "/error500",
    name: "error500",
    component: Error500
  },
  {
    path: "/newclinic",
    name: "newclinic",
    component: NewClinic
  },
  {
    path: "/editclinic",
    name: "editclinic",
    component: EditClinic
  },
  {
    path: "/clinicpage",
    name: "clinicpage",
    component: ClinicPage
  },
  {
    path: "/clinicslist",
    name: "clinicslist",
    component: ClinicsList
  },
  {
    path: "/newpatient",
    name: "newpatient",
    component: NewPatient
  },
  {
    path: "/reports",
    name: "reports",
    component: Reports
  },
  {
    path: "/newbooking",
    name: "newbooking",
    component: NewBooking
  },
  {
    path: "/general",
    name: "general",
    component: General
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Timeline
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
})

export default router;
