import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface RoleSelectScreenProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
  onNext: () => void;
}

const roles = [
  { value: 'staff-nurse-5', label: 'Staff Nurse (Band 5)' },
  { value: 'staff-nurse-6-7', label: 'Staff Nurse (Band 6/7)' },
  { value: 'junior-doctor-fy', label: 'Junior Doctor (FY1/FY2)' },
  { value: 'junior-doctor-ct-st', label: 'Junior Doctor (CT1-3/ST)' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'ahp', label: 'Allied Health Professional' },
  { value: 'hca', label: 'Healthcare Assistant' },
  { value: 'other', label: 'Other' },
];

export function RoleSelectScreen({ selectedRole, onRoleChange, onNext }: RoleSelectScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">1 of 3</span>
        </div>
        <Progress value={33} className="h-2" />
      </div>
      
      {/* Question */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
          What's your role?
        </h1>
        
        {/* Dropdown */}
        <Select value={selectedRole} onValueChange={onRoleChange}>
          <SelectTrigger className="w-full h-14 text-lg animate-fade-in">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.value} value={role.value} className="text-base py-3">
                {role.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex-1" />
        
        {/* Next button */}
        <Button 
          onClick={onNext}
          size="lg"
          disabled={!selectedRole}
          className="w-full h-14 text-lg font-semibold animate-slide-up"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
