export function BandMembers({ showMember }) {
  return (
    <section className="relative flex flex-row w-full text-center px-6 sm:px-36 mb-4">
      <picture className="photo basis-1/3">
        <img
          src={showMember.picture}
          alt="Member Photo"
          className=" shadow-gray-800 rounded-md"
        />
      </picture>

      <div className="info flex-grow items-start basis-2/3">
        <h3 className=" text-lg font-medium mb-3 rock-font">
          {showMember.name}
        </h3>
        <div className="flex flex-row justify-around mb-4">
          <p>{showMember.role}</p>
          <p>{showMember.born}</p>
        </div>
        <p className="text-base font-light text-gray-200 px-5">
          {showMember.bio}
        </p>
      </div>
    </section>
  );
}
