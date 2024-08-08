import { useQuery } from '@tanstack/react-query'
import React from 'react'

function RepoData() {
    const {data, isError, isFetching, isPending}=useQuery({
        queryKey:["getRepoData"],
        queryFn:async ()=>{
            const response= await fetch('https://api.github.com/repos/TanStack/query')
            return response.json()

        }

    })
    if(isPending){
        return "Loading"
    }
    if(isError){
        return "Error"
    }
  return (
    <div>
    <h1>{data.full_name}</h1>
    <p>{data.description}</p>
    <strong>👀 {data.subscribers_count}</strong>{' '}
    <strong>✨ {data.stargazers_count}</strong>{' '}
    <strong>🍴 {data.forks_count}</strong>
    <div>{isFetching ? 'Updating...' : ''}</div>
  </div>
    
  )
}

export default RepoData