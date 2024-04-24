const MailForm = () => {
  return (
    <section>
      <div className="bg-[#394649] mt-12">
        <h1 className="text-[72px] text-center flex justify-center items-center flex-col text-white font-semibold">
          Готови ли сте да
          <br />
           работим заедно?
        </h1>
        <p className="text-[20px] text-center flex justify-center items-center flex-col text-white font-inter">Оставете вашият телефон и ние ще се свържем с вас,
        <br />
         за да отговорорим на всички върпоси</p>
          <div className="mt-8 flex items-center justify-center flex-col-2 pb-12">
            <input type="text" placeholder="Мобилен номер" className="p-2 border border-gray-300 rounded-l outline-none text-[#083C2F] placeholder-gray-400" />
            <button type="button" className="bg-[#E7F874] text-black px-4 py-2 rounded-r font-semibold font-inter">Изпрати</button>
          </div>
        </div>  
    </section>
  )
}

export default MailForm