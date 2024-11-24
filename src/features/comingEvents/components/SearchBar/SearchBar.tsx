import { IoSearchOutline } from "react-icons/io5"
import "./SearchBar.scss"
import { MdOutlineSearch } from "react-icons/md"
import { SearchBarComponent } from "../../../../types/component.types"

const SearchBar:React.FC<SearchBarComponent> = ({setSearchValue, searchValue}) => {

  return (
    <div className='search-bar-container'>
        <MdOutlineSearch  size={35} className="search-icon"/>
        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type='text' />
    </div>
  )
}

export default SearchBar