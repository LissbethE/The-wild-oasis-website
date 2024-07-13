import CabinList from "@/components/cabins/CabinList";
import ReservationReminder from "@/components/reservation/ReservationReminder";
import Filter from "@/components/ui/Filter";
import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

/*import Counter from "../../components/Counter";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("Data", data);

  return (
    <div>
      <h1> Cabins Page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>

      <Counter data={data} />
    </div>
  );
}

export default page;
*/
