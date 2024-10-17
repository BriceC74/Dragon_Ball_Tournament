import TournamentContextClass from "./TournamentContext.ts";
import TournamentPhaseClass from "./TournamentPhase.ts";
import TrainingPhaseClass from "./TrainingPhase.ts";

export default class BattlePhaseClass extends TournamentPhaseClass {
  public endPhase(context: TournamentContextClass): void {
    context.nextPhase(new TrainingPhaseClass());
  }
}
