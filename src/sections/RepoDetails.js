import RepoCardAbout from '../components/RepoCardAbout'; 
import RepoCardFiles from '../components/RepoCardFiles';
import StatBoxes from '../components/StatBoxes'
import {Helmet} from 'react-helmet'

const RepoDetails = () => {
  let location = window.location.search;
  // const [repoContent, setRepoContent] = useState([])

  let params = new URLSearchParams(location);
  const repoName = params.get('name')


  return (
    <div className='repo-details container'>
      <Helmet>
          <title>{repoName} | Olamide Mosobalaje</title>
          <meta charSet = 'utf-8' />
          <meta name="description" content="Olamide Winner Mosobalaje's Github repositories" />
          <link rel="canonical" href={`/account/${repoName}`} />
        </Helmet>
      <h1>{repoName}</h1>
      <StatBoxes/>
      <h3 className='mb-3'>Repository Details</h3>
      <div className='repo-details-grid mb-3 container'>
        <RepoCardFiles />
        <RepoCardAbout />
      </div>
    </div>
  )
}

export default RepoDetails