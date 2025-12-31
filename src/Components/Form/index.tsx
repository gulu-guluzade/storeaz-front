const Form = () => {
  return (
    <form className="grid grid-cols-2 gap-5">
      <label className="col-start-1 col-end-2 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">adınız</span>
        <input className="w-full p-2 border-b border-gray-300" type="text" autoComplete="off" />
      </label>
      <label className="col-start-2 col-end-3 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">telefon</span>
        <input className="w-full p-2 border-b border-gray-300" type="tel" autoComplete="off" />
      </label>
      <label className="col-start-1 col-end-3 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">email</span>
        <input className="w-full p-2 border-b border-gray-300" type="email" autoComplete="off" />
      </label>
      <label className="col-start-1 col-end-3 flex flex-col gap-y-0.5">
        <span className="capitalize font-medium">mətn</span>
        <textarea className="w-full p-2 min-h-40 resize-none border-b border-gray-300"></textarea>
      </label>
      <button  
        className="col-start-1 col-end-3 bg-[#45B44D] py-2 rounded-md cursor-pointer 
        text-white font-medium uppercase transition-colors duration-200
         hover:bg-[#3e9f45] active:bg-gray-600" 
        type="button">
        göndər
      </button>
    </form>
  );
};

export default Form;
