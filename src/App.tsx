import { ThemeProvider } from "./components/ui/theme-provider";
import Dates from "./components/dates";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import Uuids from "./components/uuids";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-screen flex items-center justify-center">
        <Tabs defaultValue="dates" className="w-150 h-120">
          <TabsList>
            <TabsTrigger value="dates">Dates</TabsTrigger>
            <TabsTrigger value="uuids">UUIDs</TabsTrigger>
          </TabsList>
          <TabsContent
            value="dates"
            className="p-2 sm:p-10 flex flex-col gap-4 bg-popover rounded-sm"
          >
            <Dates />
          </TabsContent>
          <TabsContent
            value="uuids"
            className="p-2 sm:p-10 flex flex-col gap-4 bg-popover rounded-sm"
          >
            <Uuids />
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
