import { useQuery, gql } from "@apollo/client";
import client from "../../apollo-client";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function CountryList() {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data.countries.slice(0, 4);

  console.log(countries);
  return (
    <>
      <div className="text-xl flex gap-4">
        {countries[0]?.name} {countries[0]?.emoji}
        {/* yoo */}
      </div>
    </>
  );
}
