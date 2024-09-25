import { Countdown } from "../Countdown";

const Form = () => (
  <div className="p-6 bg-blue-500 bg- mx-auto rounded items-center outline">
    <div>
      <Countdown />
      <p className=" ">Czy chcesz kontynuować wpłate?</p>
    </div>
    <div className="flex gap-5 px-10 py-10">
      <button className="outline">Tak</button>
      <button className="outline">Nie</button>
    </div>
  </div>
);

export default Form;
