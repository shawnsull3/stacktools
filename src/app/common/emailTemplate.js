import React from 'react'

const renderGradeProgress = (grade) => {
    const chartArr = [];
    let fill = 1;
    const options= ['D', 'C', 'B', 'A', 'A+'];
    for (let i = 0; i < options.length; i++) {
        if (grade === options[i]) {
            fill = i + 1;
            break;
        }
    }

    for(let i = 1; i <= 5; i++) {
        if (i <= fill) {
            chartArr.push(
                <td style={{fontSize: "0", lineHeight: "0"}} width="60" bgcolor='#6fde76'>
                    &nbsp;
                </td>
            )
        } else {
            chartArr.push(
                <td style={{fontSize: "0", lineHeight: "0"}} width="60">
                    &nbsp;
                </td>
            )
        }
    }
    return chartArr;
}

export const emailTemplate = (companyResults) => {
    return (
        <table align="center" cellpadding="0" cellspacing="0" width="500" style={{border:"2px black solid", borderRadius: "20px"}} >
            <td>
                <table align="center" cellpadding="10" cellspacing="0" width="500">
                    <tr>
                        <td align="center" style={{padding: "40px 0 5px 0"}} >
                            {companyResults.companyName}
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style={{fontWeight: "bold"}} >
                            Startup Report Card
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "0px 50px 10px 50px"}}>
                            <table cellpadding="0" cellspacing="0" width="100%">
                            <tr bgcolor="#4b2c85">
                                <td style={{fontSize: "0", lineHeight: "0"}} height="7">
                                    &nbsp;
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style={{fontWeight: "bold"}} >
                            Estimated Valuation
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style={{fontSize: "0.8em", color: "#c9c9c9"}} >
                            {companyResults.estimatedValuation}
                        </td>
                    </tr>
                </table>
            </td>
            <tr>
                <td style={{padding: "20px 50px 0px 0px"}} align="end">
                    Grade
                </td>
            </tr>
            {companyResults.metrics.map(metric => {
                return (
                    <tr>
                        <tr>
                            <td style={{padding: "0px 0px 10px 20px"}} align="start">
                                {metric.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table cellpadding="0" cellspacing="0" width="100%" style={{padding: "0px 0px 20px 0px"}} >
                                    <tr>
                                        <td style={{fontSize: "0", lineHeight: "0"}} width="30">
                                            &nbsp;
                                        </td>
                                        <td width="250" valign="center">
                                            <table border="1" cellpadding="0" cellspacing="0" height="15" >
                                                <tr>
                                                    {renderGradeProgress(metric.grade)}
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="50" valign="top" style={{fontWeight: "bold", fontSize: "1.2em"}} >
                                            {metric.grade}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tr>
                )
            })}
        </table>
    )
}

export default emailTemplate;
