export function ButtonMembers({ members, onClickMember, activeMemberID }) {
  return (
    <nav className="relative flex flex-col items-center">
      <ul className="flex flex-row gap-4 mb-6">
        {members.map((member) => (
          <li className="relative" key={member.id}>
            <button
              className={`
                rounded-md border-gray-200 p-2 box-border  text-gray-200 hover:bg-gray-800 
                ${
                  activeMemberID === member.id ? "bg-gray-800" : "bg-gray-700"
                }`}
              onClick={() => onClickMember(member)}
            >
              {member.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
