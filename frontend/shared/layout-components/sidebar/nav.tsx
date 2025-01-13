import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;
const MainSWLIcon = <i className="bx bx-line-chart side-menu__icon"></i>;
const InternDBIcon = <i className="bx bx-network-chart side-menu__icon"></i>;
const SWLIcon = <i className="bx bxs-bar-chart-alt-2 side-menu__icon"></i>;
const HRDBIcon = <i className="bx bxs-collection side-menu__icon"></i>;
const FinanceIcon = <i className="bx bx-credit-card side-menu__icon"></i>;
const PSIcon = <i className="bx bxl-facebook side-menu__icon"></i>;
const ROASIcon = <i className="bx bx-bar-chart-alt side-menu__icon"></i>;
const ROASSIcon = <i className="bx bx-bar-chart-square side-menu__icon"></i>;
const STIcon = <i className='bx bx-cart-alt side-menu__icon' ></i>;
const PTIcon = <i className='bx bx-test-tube side-menu__icon' ></i>;
const BMIcon = <i className='bx bx-spreadsheet side-menu__icon' ></i>;
const PFIcon = <i className='bx bx-calculator side-menu__icon' ></i>;
const SettIcon = <i className='bx bx-cog side-menu__icon' ></i>
const TaskIcon = <i className='bx bx-task side-menu__icon'></i>;
const ISIcon = <i className='bx bxs-bank side-menu__icon' ></i>;
const ERIcon = <i className='bx bx-wallet-alt side-menu__icon' ></i>;
const BKIcon = <i className='bx bx-book side-menu__icon' ></i>;
const RIcon = <i className='bx bx-money side-menu__icon' ></i>;
const UEIcon = <i className='bx bx-box side-menu__icon' ></i>;
const UMIcon = <i className='bx bxs-user-account side-menu__icon' ></i>;
const UIIcon = <i className='bx bxs-user-rectangle side-menu__icon' ></i>;

const badge = (
	<span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-1">
		12
	</span>
);
const badge1 = (
	<span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-1">
		New
	</span>
);
const badge2 = (
	<span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-1">
		Hot
	</span>
);
const badge4 = (
	<span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-1">
		3
	</span>
);

export const MenuItems: any = [
	{
		menutitle: "DASHBOARD",
	},
	{
		path: "/dashboards/crm",
		title: "Main SWL",
		icon: MainSWLIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/intern/dashboard",
		title: "Intern Dashboard",
		icon: InternDBIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards",
		title: "Sales Warehouse Logistics",
		icon: SWLIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "HR Dashboard",
		icon: HRDBIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Finance",
		icon: FinanceIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		menutitle: "E-COMMERCE",
	},
	{
		path: "/dashboards/crm",
		title: "Pages & Store",
		icon: PSIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Page ROAS Tracker",
		icon: ROASIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Adspent ROAS Summary",
		icon: ROASSIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Sales Tracker",
		icon: STIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Product Testing",
		icon: PTIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "BM & Ad Account",
		icon: BMIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Profitability Formula",
		icon: PFIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		icon: SettIcon,
		title: "Settings",
		selected: false,
		active: false,
		type: "sub",
		children: [
			{
				path: "",
				title: "General",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
		],
	},
  {
		menutitle: "BOARD",
	},
	{
		path: "/dashboards/crm",
		title: "Kanban",
		icon: TaskIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Settings",
		icon: SettIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
  {
		menutitle: "FINANCE",
	},
	{
		path: "/dashboards/crm",
		title: "Income Statement",
		icon: ISIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/dashboards/crm",
		title: "Expected Remittance",
		icon: ERIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
  {
		path: "/dashboards/crm",
		title: "Book Keeping",
		icon: BKIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
  {
		path: "/dashboards/crm",
		title: "Reimbursement",
		icon: RIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
  {
		path: "/dashboards/crm",
		title: "Utility Expense",
		icon: UEIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
  {
		icon: SettIcon,
		title: "Settings",
		selected: false,
		active: false,
		type: "sub",
		children: [
			{
				path: "",
				title: "General",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
      {
				path: "",
				title: "Accounts",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
      {
				path: "",
				title: "Banks",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
      {
				path: "",
				title: "Department",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
      {
				path: "",
				title: "Type of Expense",
				type: "empty",
				active: false,
				selected: false,
				dirchange: false,
			},
		],
	},
  {
		menutitle: "USER",
	},
	{
		path: "/users/management",
		title: "User Management",
		icon: UMIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		path: "/intern/users",
		title: "User Intern",
		icon: UIIcon,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
];
