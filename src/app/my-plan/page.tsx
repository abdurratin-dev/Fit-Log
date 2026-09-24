import MyPlanBer from "@/components/myplan/MyPlanBer";
import TabsAndStateProvider from "@/context/TabsAndStateContext";

const MyPlanPage = () => {
  return (
    <TabsAndStateProvider>
      <section className="min-h-screen container mx-auto bg-[#090b0f] px-4 py-8 text-white sm:px-6 lg:px-8">
        {/*My Plan Ber, tabs And sort */}
        <MyPlanBer />
      </section>
    </TabsAndStateProvider>
  );
};
export default MyPlanPage;
