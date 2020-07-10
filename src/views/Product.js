import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from 'react-router-dom';
import Suzuki from './Suzuki';

export default function Product() {
    const history = useHistory();
    let match = useRouteMatch();

    console.log(match);

    return (
        <div className="App">
            <header className="App-header">
                Jenis Kendaraan
            </header>

            <div className="App">
                <header className="App-header">
                <ul>
                    <div style={{ cursor: 'pointer' }}onClick={() => history.push('/about')}>NAVIGATE</div>
                    <li><Link to={`${match.url}/GSX R`}>Sport</Link></li>
                    <li><Link to={`${match.url}/GSX S`}>Cub</Link></li>
                    <li><Link to={`${match.url}/Nex`}>Matic</Link></li>
                    <li><Link to={`${match.url}/Ertiga`}>Passenger Car</Link></li>
                    <li><Link to={`${match.url}/Carry`}>Commercials Car</Link></li>
                </ul>
                </header>

                <Switch>
                    <Route path={`${match.url}/:productId`}>
                        <Suzuki/>
                    </Route>
                    <Route path={match.url}>
                        <h1>Pilih Jenis Kendaraan</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}