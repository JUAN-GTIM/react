

function Selector() {
  return (
    <div>
<div>
  <label htmlFor="COLOR" className="block text-sm font-medium text-gray-900"> color </label>

  <div className="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist"
      id="COLOR"
      className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
      placeholder="Por favor seleccione un color"
    />

    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
    </span>
  </div>

  <datalist name="Color" id="HeadlineActArtist">
    <option value="AM">BLANCO</option>
    <option value="AZ">AZUL</option>
    <option value="AO">AMARILLO</option>
    <option value="VE">VERDE</option>
    <option value="NE">NEGRO</option>
  
  </datalist>
</div>
<div>
  <label htmlFor="Tamaño" className="block text-sm font-medium text-gray-900"> Tamaño </label>

  <div className="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist"
      id="Tamaño"
      className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
      placeholder="Porfavor selecione tamaño"
    />

    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
    </span>
  </div>

  <datalist name="tamaño" id="TAMAÑO">
    <option value="CH">CHICO</option>
    <option value="ME">MEDIANO</option>
    <option value="GR">GRANDE</option>
  
  </datalist>
</div>

    </div>
  )
}

export default Selector
