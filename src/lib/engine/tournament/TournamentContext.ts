import TournamentPhaseClass from "./TournamentPhase.ts";
import TrainingPhaseClass from "./TrainingPhase.ts";

export default class TournamentContextClass {
  private state: TournamentPhaseClass;

  constructor() {
    this.state = new TrainingPhaseClass();
  }

  public nextPhase(state: TournamentPhaseClass) {
    this.state = state;
  }

  public battle() {
    this.state.endPhase(this);
  }

  public training() {
    this.state.endPhase(this);
  }
}
