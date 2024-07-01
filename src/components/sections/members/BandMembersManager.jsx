import { useState } from "react";
import { ButtonMembers } from "./ButtonMembers.jsx";
import { BandMembers } from "./BandMembers.jsx";

export function BandMembersManager({ members }) {
  const [showDetailsMember, setShowDetailsMember] = useState(members[0]);

  const handleDetailsMember = (member) => {
    setShowDetailsMember(member);
  };

  return (
    <>
      <ButtonMembers
        members={members}
        onClickMember={handleDetailsMember}
        activeMemberID={showDetailsMember.id}
      />
      <BandMembers showMember={showDetailsMember} />
    </>
  );
}
