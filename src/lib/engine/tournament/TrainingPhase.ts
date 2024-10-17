import BattlePhaseClass from "./BattlePhase.ts";
import TournamentContextClass from "./TournamentContext.ts";
import TournamentPhaseClass from "./TournamentPhase.ts";

export default class TrainingPhaseClass extends TournamentPhaseClass {
  public endPhase(context: TournamentContextClass): void {
    context.nextPhase(new BattlePhaseClass());
  }
}
