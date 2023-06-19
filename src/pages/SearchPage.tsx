import ChildCard from "components/ChildCard"
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { childInterface } from "util/Types"

export default function SearchPage() {

  const [searchParam] = useSearchParams()
  const { childrenData } = useChildrenContext()
  const genderParam = searchParam.get('gender')
  const [children, setChildren] = useState(childrenData)

  useEffect(() => {
    if(childrenData){
      const res = childrenData.filter((child: { gender: string; name:string; age:number }) => {
        return child.gender === genderParam
      })
      res.length > 0 && setChildren(res)
    }
  }, [genderParam])

  return (
    <div className="md:px-[8%] px-3">
      <div className="flex items-center justify-between mb-7 py-6">
        <span className="text-2xl">Results {children.length}</span>
        <div className="px-3 py-1 border">Sort by</div>
      </div>
      {children.length > 0 &&
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {children.map((child: childInterface) => <ChildCard child={child} />)}
        </div>
      }
    </div>
  )
}
