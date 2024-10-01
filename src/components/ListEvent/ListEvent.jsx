export const ListEvent = ({icon, text}) => {
  return (
    <li className="flex mt-8 gap-x-3 lg:flex-col lg:justify-center lg:items-center">
      {icon}
      <p className='text-[18px] text-blue-200 lg:mt-4'>{text}</p>
    </li>
  )
}
