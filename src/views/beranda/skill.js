import React from 'react';
import Progress from 'react-bulma-components/lib/components/progress';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import { Skeleton } from '@material-ui/lab';

const Skill = (props) => {
    const data = props.data;
    //const program = data.programs;
    //const network = data.networks;
    const loading = props.loading;

    //console.log(props);

    return loading ? <LoadingSkeleton /> : (
        <Content>
            <h1>Keahlian</h1>
            <Columns>
                <Columns.Column size={6}>
                    <h5>Pemrograman</h5>
                    {
                        data.programs.map((item, key) => {
                            return (
                                <Columns key={key}>
                                    <Columns.Column>
                                        {item.label}<br />
                                        <Progress max={100} value={item.value} color={item.value > 50 ? "info" : "warning"} size="small" />
                                    </Columns.Column>
                                </Columns>
                            );
                        })
                    }
                </Columns.Column>
                <Columns.Column size={6}>
                    <h5>Network</h5>
                    {
                        data.networks.map((item, key) => {
                            return (
                                <Columns key={key}>
                                    <Columns.Column>
                                        {item.label}<br />
                                        <Progress max={100} value={item.value} color={item.value > 50 ? "info" : "warning"} size="small" />
                                    </Columns.Column>
                                </Columns>
                            );
                        })
                    }
                </Columns.Column>
            </Columns>
        </Content>
    );
}

const LoadingSkeleton = () => {
    return (
        <Content>
            <Skeleton width="30%" />
            <Columns>
                <Columns.Column size={6}>
                    <Skeleton width="30%" />
                    <Skeleton height={100} />
                </Columns.Column>
                <Columns.Column size={6}>
                    <Skeleton width="30%" />
                    <Skeleton height={100} />
                </Columns.Column>
            </Columns>
        </Content>
    );
}

export default Skill;