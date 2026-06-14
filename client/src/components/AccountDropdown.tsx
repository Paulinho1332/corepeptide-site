import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { User, LogOut } from 'lucide-react';

export default function AccountDropdown() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Button
        onClick={() => window.location.href = getLoginUrl()}
        variant="ghost"
        size="sm"
        className="text-foreground hover:text-accent"
      >
        <User size={24} />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground hover:text-accent"
        >
          <User size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5">
          <p className="text-sm font-semibold text-foreground">{user.name || user.email}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled className="text-sm">
          My Account
        </DropdownMenuItem>
        <DropdownMenuItem disabled className="text-sm">
          Order History
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout()}
          className="text-sm cursor-pointer flex items-center gap-2"
        >
          <LogOut size={16} />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
