import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft } from 'lucide-react';

interface LocationSelectScreenProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const locations = [
  { value: 'ed', label: 'Emergency Department' },
  { value: 'icu', label: 'Intensive Care Unit (ICU)' },
  { value: 'ward-general', label: 'Ward (General)' },
  { value: 'theatre', label: 'Theatre' },
  { value: 'outpatients', label: 'Outpatients' },
  { value: 'community', label: 'Community' },
  { value: 'maternity', label: 'Maternity' },
  { value: 'mental-health', label: 'Mental Health' },
  { value: 'other', label: 'Other' },
];

export function LocationSelectScreen({ selectedLocation, onLocationChange, onNext, onBack }: LocationSelectScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      {/* Back button and Progress indicator */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-muted-foreground mb-4 -ml-2 p-2 hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">2 of 3</span>
        </div>
        <Progress value={66} className="h-2" />
      </div>
      
      {/* Question */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
          Where do you mainly work?
        </h1>
        
        {/* Dropdown */}
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-full h-14 text-lg animate-fade-in">
            <SelectValue placeholder="Select your location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location.value} value={location.value} className="text-base py-3">
                {location.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex-1" />
        
        {/* Next button */}
        <Button 
          onClick={onNext}
          size="lg"
          disabled={!selectedLocation}
          className="w-full h-14 text-lg font-semibold animate-slide-up"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
