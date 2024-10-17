import TournamentPhaseClass from "./TournamentPhase.ts";
import TrainingPhaseClass from "./TrainingPhase.ts";

export default class TournamentContextClass {
  private state: TournamentPhaseClass;
  private round: number = 0;

  constructor() {
    this.state = new TrainingPhaseClass();
  }

  public nextPhase(state: TournamentPhaseClass) {
    this.state = state;
  }

  public battle() {
    this.round++;
    this.state.endPhase(this);
  }

  public training() {
    this.state.endPhase(this);
  }

  public getState() {
    return this.state;
  }

  public getRound() {
    return this.round;
  }
}
