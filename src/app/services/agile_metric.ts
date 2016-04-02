
export class AgileMetric {
    constructor(
        public teamName: string, // 27
        public standardDeployments: number, // 35
        public normalDeployments: number,   // 36
        public emergencyDeployments: number // 37
    ) {
        //console.log(this);
    }
}
