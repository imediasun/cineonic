import Vue from "vue";
import Router from "vue-router";
import store from "../store/Store";
import axios from "../axios"
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,

    routes: [
        {
            path: "/",
            component: () => import("@/layouts/full-layout/FullLayout"),
            children: [
                {
                    name: "Starter",
                    path: "starter",
                    component: () => import("@/views/Starter"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    path: "/",
                    name: "Companies",
                    component: () => import("@/views/pages/Companies"),
                    meta: {
                        requiredAuth: true
                    }
                },
                {
                    name: "Services",
                    path: "services",
                    component: () => import("@/views/Services"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Chat",
                    path: "/apps/chat",
                    component: () => import("@/views/apps/chats/Chat"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "TreeView",
                    path: "/apps/treeview",
                    component: () => import("@/views/apps/treeview/TreeView"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Calendar",
                    path: "/apps/calendar",
                    component: () => import("@/views/apps/calendar/Calendar"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Ecommerce",
                    path: "/apps/ecommerce",
                    component: () => import("@/views/apps/ecommerce/Ecommerce"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Email",
                    path: "/apps/email/inbox",
                    component: () => import("@/views/apps/email/Email"),
                    children: [
                        {
                            path: "/apps/email/:mailType",
                            name: "MailIndex",
                            component: () => import("@/views/apps/email/EmailList.vue"),
                            meta: {
                                requiredAuth: false
                            }
                        },
                        {
                            path: "/apps/email/:mailType/0/:uuid",
                            name: "MailDetail1",
                            component: () => import(`@/views/apps/email/EmailDetail.vue`),
                            meta: {
                                requiredAuth: false
                            }
                        },
                        {
                            path: "/apps/email/0/:mailTag",
                            name: "MailTag",
                            component: () => import("@/views/apps/email/EmailList.vue"),
                            meta: {
                                requiredAuth: false
                            }
                        },
                        {
                            path: "/apps/email/0/:mailTag/0/:uuid",
                            name: "MailDetail",
                            component: () => import(`@/views/apps/email/EmailDetail.vue`),
                            meta: {
                                requiredAuth: false
                            }
                        },
                    ],
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Contacts",
                    path: "/apps/contacts",
                    component: () => import("@/views/apps/contact/Contact"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Contacts Table",
                    path: "/apps/contactslist",
                    component: () => import("@/views/apps/contact-table/ContactTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Alert",
                    path: "/ui-elements/alert",
                    component: () => import("@/views/ui-elements/Alert"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Aspect",
                    path: "/ui-elements/aspect",
                    component: () => import("@/views/ui-elements/Aspect"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Avatar",
                    path: "/ui-elements/avatar",
                    component: () => import("@/views/ui-elements/Avatar"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Badge",
                    path: "/ui-elements/badge",
                    component: () => import("@/views/ui-elements/Badge"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Breadcrumb",
                    path: "/ui-elements/breadcrumb",
                    component: () => import("@/views/ui-elements/Breadcrumb"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Buttons",
                    path: "/ui-elements/buttons",
                    component: () => import("@/views/ui-elements/Buttons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Button Group",
                    path: "/ui-elements/button-group",
                    component: () => import("@/views/ui-elements/ButtonGroup"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Button Toolbar",
                    path: "/ui-elements/button-toolbar",
                    component: () => import("@/views/ui-elements/ButtonToolbar"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Cards",
                    path: "/ui-elements/cards",
                    component: () => import("@/views/ui-elements/Cards"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Carousel",
                    path: "/ui-elements/carousel",
                    component: () => import("@/views/ui-elements/Carousel"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Collapse",
                    path: "/ui-elements/collapse",
                    component: () => import("@/views/ui-elements/Collapse"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Dropdown",
                    path: "/ui-elements/dropdown",
                    component: () => import("@/views/ui-elements/Dropdown"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Embed",
                    path: "/ui-elements/embed",
                    component: () => import("@/views/ui-elements/Embed"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Image",
                    path: "/ui-elements/image",
                    component: () => import("@/views/ui-elements/Image"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Jumbotron",
                    path: "/ui-elements/jumbotron",
                    component: () => import("@/views/ui-elements/Jumbotron"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Grid",
                    path: "/ui-elements/grid",
                    component: () => import("@/views/ui-elements/Grid"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "ListGroup",
                    path: "/ui-elements/list-group",
                    component: () => import("@/views/ui-elements/ListGroup"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Media",
                    path: "/ui-elements/media",
                    component: () => import("@/views/ui-elements/Media"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Modal",
                    path: "/ui-elements/modal",
                    component: () => import("@/views/ui-elements/Modal"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Nav",
                    path: "/ui-elements/nav",
                    component: () => import("@/views/ui-elements/Nav"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Navbar",
                    path: "/ui-elements/navbar",
                    component: () => import("@/views/ui-elements/Navbar"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Overlay",
                    path: "/ui-elements/overlay",
                    component: () => import("@/views/ui-elements/Overlay"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Pagination",
                    path: "/ui-elements/pagination",
                    component: () => import("@/views/ui-elements/Pagination"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Pagination Nav",
                    path: "/ui-elements/pagination-nav",
                    component: () => import("@/views/ui-elements/PaginationNav"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Popover",
                    path: "/ui-elements/popover",
                    component: () => import("@/views/ui-elements/Popover"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Progress",
                    path: "/ui-elements/progress",
                    component: () => import("@/views/ui-elements/Progress"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Sidebar",
                    path: "/ui-elements/sidebar",
                    component: () => import("@/views/ui-elements/Sidebar"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Skeleton",
                    path: "/ui-elements/skeleton",
                    component: () => import("@/views/ui-elements/Skeleton"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Spinner",
                    path: "/ui-elements/spinner",
                    component: () => import("@/views/ui-elements/Spinner"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Tabs",
                    path: "/ui-elements/tabs",
                    component: () => import("@/views/ui-elements/Tabs"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Time",
                    path: "/ui-elements/time",
                    component: () => import("@/views/ui-elements/Time"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Toasts",
                    path: "/ui-elements/toasts",
                    component: () => import("@/views/ui-elements/Toasts"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Tooltip",
                    path: "/ui-elements/tooltip",
                    component: () => import("@/views/ui-elements/Tooltip"),
                    meta: {
                        requiredAuth: false
                    }
                },
                // form  elements
                {
                    name: "Checkbox",
                    path: "/form-elements/checkbox",
                    component: () => import("@/views/form-elements/Checkbox"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Switch",
                    path: "/form-elements/switch",
                    component: () => import("@/views/form-elements/Switch"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Radio",
                    path: "/form-elements/radio",
                    component: () => import("@/views/form-elements/Radio"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Datepicker",
                    path: "/form-elements/datepicker",
                    component: () => import("@/views/form-elements/Datepicker"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "File",
                    path: "/form-elements/file",
                    component: () => import("@/views/form-elements/File"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Rating",
                    path: "/form-elements/rating",
                    component: () => import("@/views/form-elements/Rating"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Spin Button",
                    path: "/form-elements/spin-button",
                    component: () => import("@/views/form-elements/SpinButton"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Tags",
                    path: "/form-elements/tags",
                    component: () => import("@/views/form-elements/Tags"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Timepicker",
                    path: "/form-elements/timepicker",
                    component: () => import("@/views/form-elements/Timepicker"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Textarea",
                    path: "/form-elements/textarea",
                    component: () => import("@/views/form-elements/Textarea"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Select",
                    path: "/form-elements/select",
                    component: () => import("@/views/form-elements/Select"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Inputs",
                    path: "/form-elements/form-inputs",
                    component: () => import("@/views/form-elements/FormInputs"),
                    meta: {
                        requiredAuth: false
                    }
                },
                // form layouts
                {
                    name: "Form Group",
                    path: "/form-layouts/form-group",
                    component: () => import("@/views/form-layouts/FormGroup"),
                    meta: {
                        requiredAuth: false
                    }
                },

                {
                    name: "Form Basic",
                    path: "/form-layouts/form-basic",
                    component: () => import("@/views/form-layouts/FormBasic"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Row Separator",
                    path: "/form-layouts/form-row-separator",
                    component: () => import("@/views/form-layouts/FormRowSeparator"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Bordered",
                    path: "/form-layouts/form-bordered",
                    component: () => import("@/views/form-layouts/FormBordered"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Horizontal",
                    path: "/form-layouts/form-horizontal",
                    component: () => import("@/views/form-layouts/FormHorizontal"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Striped Row",
                    path: "/form-layouts/form-striped-row",
                    component: () => import("@/views/form-layouts/FormStripedRow"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Form Wizard",
                    path: "/form-layouts/form-wizard",
                    component: () => import("@/views/form-layouts/FormWizard"),
                    meta: {
                        requiredAuth: false
                    }
                },

                // tables
                {
                    name: "Basic Tables",
                    path: "/tables/basic-table",
                    component: () => import("@/views/tables/BasicTables"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Pagination Table",
                    path: "/tables/pagination-table",
                    component: () => import("@/views/tables/PaginationTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Row Select Table",
                    path: "/tables/row-select-table",
                    component: () => import("@/views/tables/RowSelectTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Row Details Table",
                    path: "/tables/row-detail-table",
                    component: () => import("@/views/tables/RowDetailsTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Sort Table",
                    path: "/tables/sort-table",
                    component: () => import("@/views/tables/SortTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Stacked Table",
                    path: "/tables/stacked-table",
                    component: () => import("@/views/tables/StackedTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Sticky Header-Column Table",
                    path: "/tables/sticky-header-column-table",
                    component: () => import("@/views/tables/StickyHeaderColumnTable"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Search Table",
                    path: "/tables/search-table",
                    component: () => import("@/views/tables/SeachTable"),
                    meta: {
                        requiredAuth: false
                    }
                },

                // widgets
                {
                    name: "Drag n Drop",
                    path: "/widgets/drag-n-drop",
                    component: () => import("@/views/widgets/drag-n-drop/DragnDrop"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Widget Apps",
                    path: "/widgets/widget-apps",
                    component: () => import("@/views/widgets/widget-apps/WidgetApp"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Widget Data",
                    path: "/widgets/widget-data",
                    component: () => import("@/views/widgets/widget-data/WidgetData"),
                    meta: {
                        requiredAuth: false
                    }
                },

                // icons
                {
                    name: "Font Awesome",
                    path: "/icons/fontawesome",
                    component: () => import("@/views/icons/FontAwesomeIcons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Material",
                    path: "/icons/material",
                    component: () => import("@/views/icons/MaterialIcons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Simple line",
                    path: "/icons/simpleline",
                    component: () => import("@/views/icons/SimpleLineIcons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Themify",
                    path: "/icons/themify",
                    component: () => import("@/views/icons/ThemifyIcons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Feather",
                    path: "/icons/feather",
                    component: () => import("@/views/icons/FeatherIcons"),
                    meta: {
                        requiredAuth: false
                    }
                },
                // charts
                {
                    name: "Apex Charts",
                    path: "/charts/apexcharts",
                    component: () => import("@/views/charts/apexcharts/ApexCharts"),
                    meta: {
                        requiredAuth: false
                    }
                },

                // dashboard
                {
                    name: "Classic Dashboard",
                    path: "/dashboard/classic-dashboard",
                    component: () =>
                        import("@/views/dashboards/classic-dashboard/ClassicDashboard"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Analytical Dashboard",
                    path: "/dashboard/analytical-dashboard",
                    component: () =>
                        import(
                            "@/views/dashboards/analytical-dashboard/AnalyticalDashboard"
                            ),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Ecommerce Dashboard",
                    path: "/dashboard/ecommerce-dashboard",
                    component: () =>
                        import("@/views/dashboards/ecommerce-dashboard/EcommerceDashboard"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "General Dashboard",
                    path: "/dashboard/general-dashboard",
                    component: () =>
                        import("@/views/dashboards/general-dashboard/GeneralDashboard"),
                    meta: {
                        requiredAuth: false
                    }
                },
            ],
        },

        {
            path: "/authentication",
            component: () => import("@/layouts/blank-layout/Blanklayout"),
            children: [
                {
                    name: "BoxedLogin",
                    path: "boxedlogin",
                    component: () => import("@/views/authentication/BoxedLogin"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {

                    name: 'ResetPasswordForm',
                    path: 'reset-password/:token/:email',
                    component: () => import("@/views/authentication/ResetPasswordForm"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "ForgotPassword",
                    path: "forgotpassword",
                    component: () => import("@/views/authentication/ForgotPassword"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "FullLogin",
                    path: "fulllogin",
                    component: () => import("@/views/authentication/FullLogin"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "BoxedRegister",
                    path: "boxedregister",
                    component: () => import("@/views/authentication/BoxedRegister"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "FullRegister",
                    path: "fullregister",
                    component: () => import("@/views/authentication/FullRegister"),
                    meta: {
                        requiredAuth: false
                    }
                },
                {
                    name: "Error",
                    path: "error",
                    component: () => import("@/views/authentication/Error"),
                    meta: {
                        requiredAuth: false
                    }
                },
            ],
        },
        {
            path: "*",
            component: () => import("@/views/authentication/Error"),
            meta: {
                requiredAuth: false
            }
        },
    ],
});

//import NProgress from "nprogress";


router.beforeResolve(async (to, from, next) => {
    if (!store.state.auth && to.meta.requiredAuth) {
        try {
                const auth = await axios.get('user')
                store.commit('SET_AUTH')
                store.commit('SET_USER_DATA', auth.data)
                next()
        } catch {
            next('/authentication/fulllogin')
        }
    }
    else if (!to.meta.requiredAuth){
        next()
    }
    else {
        next('/authentication/fulllogin')
    }
});



export default router;
