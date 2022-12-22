import client from "../apollo-client";
import CountryList from "../components/CountryList";
import { ApolloProvider } from "@apollo/client";
import ClientOnly from "../components/clientOnly";

export default function Home() {
  return (
    <>
      {/* <div className="text-xl flex gap-4">
        {countries[0]?.name} {countries[0]?.emoji}
      </div> */}
      <ApolloProvider client={client}>
        <ClientOnly>
          <CountryList />
        </ClientOnly>
      </ApolloProvider>
    </>
  );
}
