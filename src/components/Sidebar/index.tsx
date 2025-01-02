import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      {/* patern de composiçao */}
      <InputRoot>
        <InputPrefix>
          <Search className="text-zin-500 h-5 w-5" />
        </InputPrefix>
        <InputControl placeholder="Serch" />
      </InputRoot>

      <nav className="-space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  );
}
