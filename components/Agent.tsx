import Image from "next/image";

const Agent = () => {
  return (
    <div className="call-view">
      <div className="card-interviewer">
        <div className="avatar">
          <Image
            src="/ai-avatar.png"
            alt="vapi"
            width={65}
            height={54}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Agent;
