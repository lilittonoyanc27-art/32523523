/**
 * Web Audio API synthesizer for authentic "Who Wants to Be a Millionaire" soundscapes
 * Completely self-contained, no external assets needed.
 */

class SoundEffectsManager {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;

  constructor() {
    // Lazy initialized on first user gesture
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSuspenseMusic();
    }
    return this.isMuted;
  }

  // Play click / select option sound
  public playSelect() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.08);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.15);
    } catch {
      // Audio not permitted yet
    }
  }

  // Play lock-in / final answer sound (heavy ominous low hit)
  public playLockIn() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // Deep dramatic bass hit
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(55, t + 0.5);

      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.85);

      // High click accent
      const oscHigh = this.ctx.createOscillator();
      const gainHigh = this.ctx.createGain();
      oscHigh.type = 'sine';
      oscHigh.frequency.setValueAtTime(700, t);
      oscHigh.frequency.exponentialRampToValueAtTime(300, t + 0.1);

      gainHigh.gain.setValueAtTime(0.25, t);
      gainHigh.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      oscHigh.connect(gainHigh);
      gainHigh.connect(this.ctx.destination);

      oscHigh.start(t);
      oscHigh.stop(t + 0.15);
    } catch {
      // Audio not permitted yet
    }
  }

  // Play correct answer sound (glorious ascending chord fanfare)
  public playCorrect() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.08);

        gain.gain.setValueAtTime(0, t + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.22, t + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.9);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.08);
        osc.stop(t + idx * 0.08 + 0.95);
      });
    } catch {
      // Audio not permitted
    }
  }

  // Play wrong answer sound (dramatic downward discordant hit)
  public playWrong() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // Low discordant minor second interval
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';

      osc1.frequency.setValueAtTime(110, t); // A2
      osc1.frequency.exponentialRampToValueAtTime(70, t + 0.8);

      osc2.frequency.setValueAtTime(116.54, t); // Bb2 (discord)
      osc2.frequency.exponentialRampToValueAtTime(74, t + 0.8);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.85);
      osc2.stop(t + 0.85);
    } catch {
      // Audio not permitted
    }
  }

  // Play lifeline sound (chime / twinkle)
  public playLifeline() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const notes = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t + idx * 0.07);

        gain.gain.setValueAtTime(0, t + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.2, t + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.07 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.07);
        osc.stop(t + idx * 0.07 + 0.65);
      });
    } catch {
      // Audio not permitted
    }
  }

  // Play grand victory fanfare when winning 1,000,000 $
  public playVictory() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const melody = [
        { f: 523.25, d: 0.2, wait: 0 },
        { f: 659.25, d: 0.2, wait: 0.2 },
        { f: 783.99, d: 0.25, wait: 0.4 },
        { f: 1046.50, d: 0.7, wait: 0.65 },
        { f: 783.99, d: 0.2, wait: 1.4 },
        { f: 1046.50, d: 1.2, wait: 1.6 }
      ];

      melody.forEach(item => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.f, t + item.wait);

        gain.gain.setValueAtTime(0, t + item.wait);
        gain.gain.linearRampToValueAtTime(0.28, t + item.wait + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, t + item.wait + item.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + item.wait);
        osc.stop(t + item.wait + item.d + 0.05);
      });
    } catch {
      // Audio not permitted
    }
  }

  // Start low background suspense drone (classic Millionaire heartbeat tension)
  public startSuspenseDrone() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      this.stopSuspenseMusic();

      const t = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.04, t);

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, t); // A1

      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(55.5, t); // Slight phase beat

      this.ambientOsc1.connect(this.ambientGain);
      this.ambientOsc2.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch {
      // Audio
    }
  }

  public stopSuspenseMusic() {
    try {
      if (this.ambientOsc1) {
        this.ambientOsc1.stop();
        this.ambientOsc1.disconnect();
        this.ambientOsc1 = null;
      }
      if (this.ambientOsc2) {
        this.ambientOsc2.stop();
        this.ambientOsc2.disconnect();
        this.ambientOsc2 = null;
      }
      if (this.ambientGain) {
        this.ambientGain.disconnect();
        this.ambientGain = null;
      }
    } catch {
      // Audio
    }
  }
}

export const sound = new SoundEffectsManager();
