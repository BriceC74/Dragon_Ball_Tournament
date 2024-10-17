import TournamentContextClass from "./TournamentContext.ts";

export default abstract class TournamentPhaseClass {
  public abstract endPhase(context: TournamentContextClass): void;
}
