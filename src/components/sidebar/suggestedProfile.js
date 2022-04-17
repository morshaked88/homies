import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { followUser, addToFollowers } from "../../services/firebase";

export default function SuggestedProfile({
  username,
  userDocId,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollower() {
    setFollowed(true);

    //add activeuser new user that he's following
    followUser(userDocId, loggedInUserDocId, false);
    //add follower to the followed user array
    addToFollowers(userDocId, loggedInUserDocId, false);
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/avatars/default.jpg";
          }}
          alt={username}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div className="">
        <button
          className="text-sm font-bold text-blue-medium"
          type="button"
          onClick={() => handleFollower()}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.prototypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
