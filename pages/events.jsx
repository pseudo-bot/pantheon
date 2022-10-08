import Card from "../components/Events/card";

export default function Events() {
  // "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
  // add margin top of 16 px to compensate for the navbar
  return (
    <div className="mt-16 min-h-[calc(100vh-4rem)] h-max text-white bg-neutral-900">
      {
        // This is the Card Container,
        // Copy this as a wrapper to the card component
      }
      <div className="pt-8 flex flex-row flex-wrap justify-evenly gap-y-8">
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
        <Card
          imgsrc="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          name="Big Event"
          coordinators="Test ( 232323232323 )"
          club="Big Club"
          venue="Big Building"
          datetime="01/01/01 at 12:12 PM"
          desc="big event for big prizes and other big words lorem ipsum is overused"
        />
      </div>
    </div>
  );
}
