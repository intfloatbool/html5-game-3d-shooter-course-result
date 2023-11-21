export default class GameTimer {

    static OnTickOneSecondObservable;
    static StartTime;

    static GetElapsedTimeMs() {
        const nowDate = new Date();
        // elapsed time in milliseconds
        const dateDiff = nowDate - GameTimer.StartTime;
        
        return dateDiff;
    }

    static GetElapsedTimeSeconds() {
    
        return GameTimer.GetElapsedTimeMs() * 0.001 ;
    }

    static StartTimer() {
        GameTimer.OnTickOneSecondObservable = new BABYLON.Observable();
        GameTimer.OnTickOnSecondLoopAsync(() => {
            const timeSecondSinceStarted = Math.round(GameTimer.GetElapsedTimeSeconds());
            //console.log("TIMER: " + timeSecondSinceStarted);
            GameTimer.OnTickOneSecondObservable.notifyObservers(timeSecondSinceStarted);
        });
    }

    static async OnTickOnSecondLoopAsync(callBack) {
        while(true) {
            await new Promise((res, rej) => {
                setTimeout(res, 1000);
            });

            callBack();
        }
    }
    
}