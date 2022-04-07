import { useState, useEffect } from "react";
import { getUsersSuggetions } from "../../services/firebase";

export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const user = getUsersSuggetions(userId);
    console.log(user);
  }, []);
  return <div>suggestions</div>;
}
