interface HomeProps {
    setIsSearching: (value: boolean) => void;
    setSearchContent: (value: string) => void;
  }

export default function SearchArea(props: HomeProps) {
    const { setIsSearching, setSearchContent } = props

  function handleChange(value: string) {

    setSearchContent(value)
    setIsSearching(true)
  }

  return (
    <div><input placeholder='Search comics here!'  onChange={({target}) => handleChange(target.value)} className='p-2 w-[80%] rounded-md outline-none border-none'></input></div>
  )
}
