'use strict';

function RankSelect(props) {
    return (
        <select>
            <option value="1" defaultValue>Silver 1</option>
            <option value="2">Silver 2</option>
            <option value="3">Silver 3</option>
            <option value="4">Silver 4</option>
            <option value="5">Silver Elite</option>
            <option value="6">Silver Elite Master</option>
            <option value="7">Gold 1</option>
            <option value="8">Gold 2</option>
            <option value="9">Gold 3</option>
            <option value="10">Gold 4</option>
            <option value="11">Master Guardian</option>
            <option value="12">Master Guardian 2</option>
            <option value="13">Master Guardian Elite</option>
            <option value="14">Distinguished Master Guardian</option>
            <option value="15">Legendary Eagle</option>
            <option value="16">Legendary Eagle Master</option>
            <option value="17">Supreme Master First Class</option>
            <option value="18">Global Elite</option>
        </select>
    );
}

class AverageRankForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {team1Average: '0', team2Average: '0',
                      team1Total: '0', team2Total: '0',
                      ratio: '0', diff: '0'};
    }
    
    componentDidMount() {
        document.querySelectorAll("select").forEach(sel => {
            sel.addEventListener("change", event => {
                const selects = document.querySelectorAll("select");
                let team1 = 0, team2 = 0;
                
                let count = 0;
                for (const sel of selects) {
                    if (count < 5) {
                        team1 += parseInt(sel.value);
                    }
                    else {
                        team2 += parseInt(sel.value);
                    }
                    count++;
                }
                
                this.setState({team1Average: (team1 / 5)});
                this.setState({team2Average: (team2 / 5)});
                this.setState({team1Total: team1});
                this.setState({team2Total: team2});
                this.setState({ratio: (team1 / team2)});
                this.setState({diff: Math.abs(team1 - team2)});                
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        team 1
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                    </div>
                    <div>
                        team 2
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                        <RankSelect />
                    </div>
                </form>
                <br />
                <div>Totals: {this.state.team1Total} - {this.state.team2Total}</div>
                <br />
                <div>Averages: {this.state.team1Average} - {this.state.team2Average}</div>
                <br />
                <div>Ratio: {this.state.ratio}</div>
                <br />
                <div>Diff: {this.state.diff}</div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
	<AverageRankForm />,
	document.getElementById('root')
);

