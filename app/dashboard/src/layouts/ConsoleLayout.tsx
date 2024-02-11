import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const ConsoleLayout = () => {
  return (
    <Grid templateColumns="repeat(24, 1fr)" gap={4} minH="100vh">
      <GridItem colSpan={5} minW="300px">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={19} flexGrow={1}>
        <Suspense>
          <Outlet />
        </Suspense>
      </GridItem>
    </Grid>
  );
};

export default ConsoleLayout;
