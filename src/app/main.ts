import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const About = {
  template: "<div>About view</div>",
  mounted: function() {
    console.log("Welcome to the About view");
    const userId = this.$route.params.id;

    if (userId) {
      console.log("You are viewing the user:", userId);
    }
  },
  destroyed: function() {
    console.log("Thanks for visiting to the About view");
  }
};

const Contact = {
  props: ["id"],
  template: "<div>Contact view</div>",
  mounted: function() {
    console.log("Welcome to the Contact view");
    const userId = this.id;

    if (userId) {
      console.log("You are viewing the user", userId);
    }
  },
  destroyed: function() {
    console.log("Thanks for visiting to the Contact view");
  }
};

const NamedRoute = {
  template: "<div>Named route content</div>"
};

const FirstChild = {
  template: "<div>Hi I'm the first child</div>"
};

const SecondChild = {
  template: "<div>Hi I'm the second child</div>"
};

const ParentComponent = {
  template: `<div>
      Hi I'm the parent, I will stay here
      <router-view></router-view>
      <router-link to="/parent/first-child">First Child</router-link>
      <router-link to="/parent/second-child">Second Child</router-link>
    </div>
  `
};

const ParentRoute = {
  path: "/parent",
  name: "parent",
  component: ParentComponent,
  children: [
    {
      path: "first-child",
      component: FirstChild
    },
    {
      path: "second-child",
      component: SecondChild
    }
  ]
};

const routes = [
  {
    path: "/contact/:id",
    component: Contact,
    props: true
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/about/:id",
    component: About
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/black",
    name: "white",
    component: NamedRoute
  },
  ParentRoute
];

const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount("#app");
