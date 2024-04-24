const Other = () => {
  return (
    <section className="flex flex-col items-center mt-14">
      <div>
      <h1 className="text-[01303A] text-[48px] font-semibold">
        Други Услуги
      </h1>
      </div>
  <div className="flex flex-col items-center w-full max-w-screen-lg">
    <div className="flex w-full mt-6 gap-6 mb-10 ">
      <div className="w-1/3">
        <img src="src\sections\Photo1.png" alt="Photo 1" className="w-full" />
        <h1 className="text-center mt-2 text-[24px] font-semibold text-[#01303A]">Опасни товари (ADR)</h1>
      </div>
      <div className="w-1/3">
        <img src="src\sections\Photo2.png" alt="Photo 2" className="w-full" />
        <h1 className="text-center mt-2 text-[24px] font-semibold text-[#01303A]">Хладилен транспорт</h1>
      </div>
      <div className="w-1/3">
        <img src="src\sections\Photo1.png" alt="Photo 3" className="w-full" />
        <h1 className="text-center mt-2 text-[24px] font-semibold text-[#01303A]">Извънгабаритни товари</h1>
      </div>
    </div>
  </div>
</section>
  )
}

export default Other