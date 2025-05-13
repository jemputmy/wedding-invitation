import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export interface CalendarDrawerInterface {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export function LocationDrawer({
    open,
    onOpenChange,
  }: CalendarDrawerInterface) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerTrigger></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Location Drawer</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={() => onOpenChange(false)}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  
  