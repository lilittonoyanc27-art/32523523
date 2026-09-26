/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Volume2, VolumeX, HelpCircle, Users, PhoneCall, RefreshCw, 
  Award, BookOpen, ChevronRight, CheckCircle2, XCircle, RotateCcw, 
  Sparkles, Eye, EyeOff, DollarSign, LogOut, Menu, X, ArrowRight,
  ArrowLeft, Home
} from 'lucide-react';
import { Question, OptionItem, GameMode, LifelineState, AudienceVote, PrizeLevel } from './types';
import { QUESTIONS_DATA, GRAMMAR_GUIDE, getLadderForQuestionsCount } from './questions';
import { sound } from './sound';

export default function App() {
  // Game Setup & Mode
  const [gameMode, setGameMode] = useState<GameMode>('classic15');
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'gameover' | 'won'>('welcome');
  
  // Audio state
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Active Questions set for the session
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Selection and verification states
  const [selectedKey, setSelectedKey] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  // Interactive Translations (user requested click on question & options)
  const [showArmenianQuestion, setShowArmenianQuestion] = useState<boolean>(false);
  const [revealedOptionTranslations, setRevealedOptionTranslations] = useState<Record<string, boolean>>({});
  const [alwaysShowArmenian, setAlwaysShowArmenian] = useState<boolean>(false);

  // Lifelines
  const [lifelines, setLifelines] = useState<LifelineState>({
    fiftyFifty: true,
    audience: true,
    phone: true,
    switch: true
  });
  const [disabledOptions, setDisabledOptions] = useState<('A' | 'B' | 'C' | 'D')[]>([]);
  
  // Lifeline Modals
  const [audienceModalData, setAudienceModalData] = useState<AudienceVote | null>(null);
  const [phoneModalMessage, setPhoneModalMessage] = useState<string | null>(null);
  const [showGrammarModal, setShowGrammarModal] = useState<boolean>(false);
  const [showLadderDrawer, setShowLadderDrawer] = useState<boolean>(false);
  const [showQuitConfirmModal, setShowQuitConfirmModal] = useState<boolean>(false);

  // Return to main menu handler
  const handleReturnToMenu = () => {
    sound.stopSuspenseMusic();
    setGameState('welcome');
    setShowQuitConfirmModal(false);
  };

  // Score & Prize Ladder
  const ladder: PrizeLevel[] = useMemo(() => {
    return getLadderForQuestionsCount(sessionQuestions.length || 15);
  }, [sessionQuestions.length]);

  const currentQuestion = sessionQuestions[currentIndex] || null;

  // Track highest guaranteed milestone reached
  const guaranteedAmount = useMemo(() => {
    if (!ladder.length || currentIndex === 0) return 0;
    let maxGuaranteed = 0;
    for (let i = 0; i < currentIndex; i++) {
      if (ladder[i]?.isMilestone) {
        maxGuaranteed = ladder[i].amount;
      }
    }
    return maxGuaranteed;
  }, [ladder, currentIndex]);

  // Current accumulated prize
  const currentPrizeAmount = useMemo(() => {
    if (currentIndex === 0) return 0;
    return ladder[currentIndex - 1]?.amount || 0;
  }, [ladder, currentIndex]);

  // Initialize a game session
  const startGame = (mode: GameMode) => {
    setGameMode(mode);
    let selectedQs: Question[] = [];

    if (mode === 'classic15') {
      // Pick 15 questions: 9 from pasados, 6 from pronombres for classic balance
      const pasados = [...QUESTIONS_DATA.filter(q => q.category === 'pasados')].sort(() => Math.random() - 0.5);
      const pronombres = [...QUESTIONS_DATA.filter(q => q.category === 'pronombres')].sort(() => Math.random() - 0.5);
      selectedQs = [...pasados.slice(0, 9), ...pronombres.slice(0, 6)].sort((a, b) => a.id - b.id);
    } else if (mode === 'marathon50') {
      selectedQs = [...QUESTIONS_DATA];
    } else if (mode === 'pasados') {
      selectedQs = QUESTIONS_DATA.filter(q => q.category === 'pasados');
    } else if (mode === 'pronombres') {
      selectedQs = QUESTIONS_DATA.filter(q => q.category === 'pronombres');
    }

    setSessionQuestions(selectedQs);
    setCurrentIndex(0);
    setSelectedKey(null);
    setIsAnswerLocked(false);
    setIsVerified(false);
    setIsCorrect(false);
    setShowArmenianQuestion(false);
    setRevealedOptionTranslations({});
    setDisabledOptions([]);
    setLifelines({
      fiftyFifty: true,
      audience: true,
      phone: true,
      switch: true
    });
    setAudienceModalData(null);
    setPhoneModalMessage(null);
    setGameState('playing');
    sound.startSuspenseDrone();
  };

  // Sound toggle
  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  // Click on question to toggle Armenian translation
  const handleQuestionClick = () => {
    setShowArmenianQuestion(prev => !prev);
    sound.playSelect();
  };

  // Click on option to toggle its individual Armenian explanation
  const handleOptionTranslationToggle = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    setRevealedOptionTranslations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    sound.playSelect();
  };

  // Select an option
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswerLocked || isVerified || disabledOptions.includes(key)) return;
    setSelectedKey(key);
    sound.playSelect();
  };

  // Lock in final answer
  const handleLockInAnswer = () => {
    if (!selectedKey || !currentQuestion || isAnswerLocked) return;
    setIsAnswerLocked(true);
    sound.playLockIn();

    // Dramatic 1.2s delay authentic to TV show
    setTimeout(() => {
      const correct = selectedKey === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      setIsVerified(true);
      setShowArmenianQuestion(true); // Automatically reveal full translation upon verification

      if (correct) {
        sound.playCorrect();
        if (currentIndex === sessionQuestions.length - 1) {
          // Reached the million!
          setTimeout(() => {
            sound.playVictory();
            setGameState('won');
          }, 1200);
        }
      } else {
        sound.playWrong();
      }
    }, 1200);
  };

  // Move to next question
  const handleNextQuestion = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedKey(null);
      setIsAnswerLocked(false);
      setIsVerified(false);
      setIsCorrect(false);
      setShowArmenianQuestion(alwaysShowArmenian);
      setRevealedOptionTranslations({});
      setDisabledOptions([]);
      sound.playSelect();
      sound.startSuspenseDrone();
    }
  };

  // Walk away with current prize
  const handleWalkAway = () => {
    if (isAnswerLocked) return;
    sound.stopSuspenseMusic();
    setGameState('gameover');
  };

  // Lifeline 1: 50:50
  const useFiftyFifty = () => {
    if (!lifelines.fiftyFifty || !currentQuestion || isAnswerLocked || isVerified) return;
    sound.playLifeline();
    const wrongKeys = currentQuestion.options
      .map(o => o.key)
      .filter(k => k !== currentQuestion.correctAnswer);
    
    // Pick 2 random wrong options to eliminate
    const shuffledWrong = wrongKeys.sort(() => Math.random() - 0.5);
    const toDisable = shuffledWrong.slice(0, 2);

    setDisabledOptions(toDisable);
    setLifelines(prev => ({ ...prev, fiftyFifty: false }));
  };

  // Lifeline 2: Ask the Audience
  const useAudience = () => {
    if (!lifelines.audience || !currentQuestion || isAnswerLocked || isVerified) return;
    sound.playLifeline();

    const correct = currentQuestion.correctAnswer;
    const vote: AudienceVote = { A: 0, B: 0, C: 0, D: 0 };
    
    // High chance audience knows the right answer
    const correctPercent = Math.floor(Math.random() * 25) + 55; // 55% - 80%
    const remaining = 100 - correctPercent;
    const otherKeys = (['A', 'B', 'C', 'D'] as const).filter(k => k !== correct);
    
    const r1 = Math.floor(Math.random() * remaining * 0.6);
    const r2 = Math.floor(Math.random() * (remaining - r1));
    const r3 = remaining - r1 - r2;

    vote[correct] = correctPercent;
    vote[otherKeys[0]] = r1;
    vote[otherKeys[1]] = r2;
    vote[otherKeys[2]] = r3;

    setAudienceModalData(vote);
    setLifelines(prev => ({ ...prev, audience: false }));
  };

  // Lifeline 3: Phone a Friend
  const usePhone = () => {
    if (!lifelines.phone || !currentQuestion || isAnswerLocked || isVerified) return;
    sound.playLifeline();

    const correct = currentQuestion.correctAnswer;
    const optObj = currentQuestion.options.find(o => o.key === correct);
    const friendAdvice = `«Ողջույն, ընկերս։ Հարցը շատ հետաքրքիր է։ Ես 90%-ով վստահ եմ, որ ճիշտ պատասխանն է [${correct}: ${optObj?.text}] (${optObj?.hyText})։ ${currentQuestion.explanationHy.slice(0, 100)}...»`;

    setPhoneModalMessage(friendAdvice);
    setLifelines(prev => ({ ...prev, phone: false }));
  };

  // Lifeline 4: Switch Question
  const useSwitchQuestion = () => {
    if (!lifelines.switch || !currentQuestion || isAnswerLocked || isVerified) return;
    sound.playLifeline();

    // Find an unused question from QUESTIONS_DATA
    const usedIds = new Set(sessionQuestions.map(q => q.id));
    const available = QUESTIONS_DATA.filter(q => !usedIds.has(q.id) && q.category === currentQuestion.category);
    const fallbackAvailable = QUESTIONS_DATA.filter(q => !usedIds.has(q.id));
    
    const pool = available.length > 0 ? available : fallbackAvailable;
    if (pool.length > 0) {
      const newQ = pool[Math.floor(Math.random() * pool.length)];
      const updatedList = [...sessionQuestions];
      updatedList[currentIndex] = newQ;
      setSessionQuestions(updatedList);
      setSelectedKey(null);
      setDisabledOptions([]);
      setRevealedOptionTranslations({});
      setShowArmenianQuestion(alwaysShowArmenian);
    }

    setLifelines(prev => ({ ...prev, switch: false }));
  };

  return (
    <div className="min-h-screen studio-bg text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      {/* Top Navbar */}
      <header className="border-b border-blue-900/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-3 sm:px-6 py-2.5 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back to Menu button if playing */}
          {gameState === 'playing' ? (
            <button
              onClick={() => setShowQuitConfirmModal(true)}
              className="px-2.5 py-1.5 rounded-lg bg-blue-950 hover:bg-rose-950/80 border border-blue-800 hover:border-rose-500 text-blue-200 hover:text-rose-200 text-xs font-medium flex items-center gap-1.5 transition-all shadow cursor-pointer group"
              title="Վերադառնալ գլխավոր մենյու"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Մենյու</span>
            </button>
          ) : (
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-amber-400/80 bg-gradient-to-tr from-amber-600 to-yellow-300 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center">
              <span className="font-cinzel text-slate-950 font-black text-lg">M</span>
            </div>
          )}
          <div>
            <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-wider text-amber-300 drop-shadow flex items-center gap-1.5">
              Ո՞վ է ուզում դառնալ միլիոնատեր
            </h1>
            <p className="text-[10px] sm:text-xs text-blue-300 font-medium">
              ¿Quién quiere ser millonario? — Español 🇪🇸 & Հայերեն 🇦🇲
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Always show translation toggle */}
          <button
            onClick={() => {
              setAlwaysShowArmenian(prev => !prev);
              setShowArmenianQuestion(!alwaysShowArmenian);
            }}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
              alwaysShowArmenian
                ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                : 'bg-blue-950/60 border-blue-800 text-blue-300 hover:border-blue-700'
            }`}
            title="Միշտ ցուցադրել հայերեն թարգմանությունը"
          >
            {alwaysShowArmenian ? <Eye className="w-3.5 h-3.5 text-amber-400" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">Միշտ հայերեն</span>
            <span className="md:hidden">🇦🇲</span>
          </button>

          {/* Grammar Guide Button */}
          <button
            onClick={() => setShowGrammarModal(true)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-blue-950/80 hover:bg-blue-900 border border-blue-700/70 text-blue-200 flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Քերականություն</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-700/70 text-blue-200 transition-colors"
            title={isMuted ? 'Միացնել ձայնը' : 'Անջատել ձայնը'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Mobile Ladder drawer toggle */}
          {gameState === 'playing' && (
            <button
              onClick={() => setShowLadderDrawer(!showLadderDrawer)}
              className="lg:hidden p-1.5 rounded-lg bg-amber-950/50 border border-amber-600/70 text-amber-300"
              title="Մրցանակային սանդուղք"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-2 sm:px-4 py-3 sm:py-6">
        {/* ======================================================== */}
        {/* 1. WELCOME SCREEN / GAME SELECT */}
        {/* ======================================================== */}
        {gameState === 'welcome' && (
          <div className="max-w-3xl mx-auto w-full bg-slate-900/90 border border-blue-800/80 rounded-2xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient studio glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center space-y-3 relative z-10">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-b from-blue-950 to-slate-950 border-2 border-amber-400/90 shadow-xl shadow-amber-500/20 mb-2 animate-pulse">
                <Award className="w-12 h-12 text-amber-400" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-100 tracking-wide gold-glow">
                Ո՞Վ Է ՈՒԶՈՒՄ ԴԱՌՆԱԼ ՄԻԼԻՈՆԱՏԵՐ
              </h2>

              <p className="text-sm sm:text-base text-blue-200 max-w-xl mx-auto font-armenian">
                Ստուգեք իսպաներենի ձեր գիտելիքները (Pasados & Pronombres)։ Խաղացեք առանց ժամանակի սահմանափակման,
                օգտվեք հուշումներից և սեղմեք ցանկացած հարցի կամ տարբերակի վրա՝ հայերեն թարգմանությունը տեսնելու համար։
              </p>
            </div>

            {/* Mode Selection Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
              <button
                onClick={() => startGame('classic15')}
                className="group p-4 rounded-xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-amber-400/60 hover:border-amber-300 transition-all text-left shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cinzel text-amber-300 font-bold text-lg flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Դասական (15 Հարց)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/40">
                    1,000,000 $
                  </span>
                </div>
                <p className="text-xs text-blue-200 font-armenian">
                  Հեռուստատեսային դասական ձևաչափ՝ 15 հարց, 2 չայրվող գումար ($1,000 և $32,000) և 4 հուշում։
                </p>
              </button>

              <button
                onClick={() => startGame('marathon50')}
                className="group p-4 rounded-xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-cyan-500/60 hover:border-cyan-400 transition-all text-left shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cinzel text-cyan-300 font-bold text-lg flex items-center gap-1.5">
                    🏆 Լիարժեք Մարաթոն (50 Հարց)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-semibold border border-cyan-400/40">
                    Բոլոր 50-ը
                  </span>
                </div>
                <p className="text-xs text-blue-200 font-armenian">
                  Անցեք բոլոր 50 հարցերը՝ անցյալ ժամանակներ (1–30) և դերանուններ (31–50)։
                </p>
              </button>

              <button
                onClick={() => startGame('pasados')}
                className="group p-4 rounded-xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-blue-700/60 hover:border-blue-400 transition-all text-left shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cinzel text-blue-300 font-bold text-base flex items-center gap-1.5">
                    ⏳ Անցյալ Ժամանակներ (Pasados)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                    Հարց 1–30
                  </span>
                </div>
                <p className="text-xs text-blue-300/90 font-armenian">
                  Pretérito Perfecto, Indefinido և Imperfecto-ի համակարգված կիրառություն։
                </p>
              </button>

              <button
                onClick={() => startGame('pronombres')}
                className="group p-4 rounded-xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-blue-700/60 hover:border-blue-400 transition-all text-left shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cinzel text-blue-300 font-bold text-base flex items-center gap-1.5">
                    🎯 Դերանուններ (Pronombres)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                    Հարց 31–50
                  </span>
                </div>
                <p className="text-xs text-blue-300/90 font-armenian">
                  Ուղիղ (lo, la, los, las) և անուղղակի (le, les) դերանուններ + «se» կանոնը։
                </p>
              </button>
            </div>

            {/* Quick feature callouts */}
            <div className="mt-8 pt-5 border-t border-blue-900/60 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-blue-300/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Առանց ժամանակի սահմանափակման
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Սեղմեք հարցի վրա՝ թարգմանելու
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 4 օրիգինալ հուշում
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. ACTIVE GAMEPLAY */}
        {/* ======================================================== */}
        {gameState === 'playing' && currentQuestion && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
            {/* Center Area: Lifelines, Question, Options, Status */}
            <div className="lg:col-span-3 flex flex-col items-center w-full">
              {/* Lifeline Buttons Bar */}
              <div className="w-full flex items-center justify-between gap-2 max-w-2xl mb-4 bg-slate-950/70 p-2 sm:p-2.5 rounded-xl border border-blue-900/60 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* 50:50 */}
                  <button
                    onClick={useFiftyFifty}
                    disabled={!lifelines.fiftyFifty || isAnswerLocked || isVerified}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all flex items-center gap-1.5 shadow ${
                      lifelines.fiftyFifty && !isAnswerLocked && !isVerified
                        ? 'bg-blue-950 border-amber-400/90 text-amber-300 hover:bg-blue-900 hover:shadow-amber-400/20 hover:scale-105 cursor-pointer'
                        : 'bg-slate-900 border-slate-800 text-slate-600 line-through cursor-not-allowed opacity-50'
                    }`}
                    title="50:50 — Հեռացնում է 2 սխալ պատասխան"
                  >
                    50:50
                  </button>

                  {/* Ask the Audience */}
                  <button
                    onClick={useAudience}
                    disabled={!lifelines.audience || isAnswerLocked || isVerified}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all flex items-center gap-1.5 shadow ${
                      lifelines.audience && !isAnswerLocked && !isVerified
                        ? 'bg-blue-950 border-amber-400/90 text-amber-300 hover:bg-blue-900 hover:shadow-amber-400/20 hover:scale-105 cursor-pointer'
                        : 'bg-slate-900 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                    }`}
                    title="Դահլիճի օգնություն"
                  >
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="hidden sm:inline">Դահլիճ</span>
                  </button>

                  {/* Phone a Friend */}
                  <button
                    onClick={usePhone}
                    disabled={!lifelines.phone || isAnswerLocked || isVerified}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all flex items-center gap-1.5 shadow ${
                      lifelines.phone && !isAnswerLocked && !isVerified
                        ? 'bg-blue-950 border-amber-400/90 text-amber-300 hover:bg-blue-900 hover:shadow-amber-400/20 hover:scale-105 cursor-pointer'
                        : 'bg-slate-900 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                    }`}
                    title="Զանգ ընկերոջը"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Զանգ</span>
                  </button>

                  {/* Switch Question */}
                  <button
                    onClick={useSwitchQuestion}
                    disabled={!lifelines.switch || isAnswerLocked || isVerified}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all flex items-center gap-1.5 shadow ${
                      lifelines.switch && !isAnswerLocked && !isVerified
                        ? 'bg-blue-950 border-amber-400/90 text-amber-300 hover:bg-blue-900 hover:shadow-amber-400/20 hover:scale-105 cursor-pointer'
                        : 'bg-slate-900 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                    }`}
                    title="Հարցի փոխարինում"
                  >
                    <RefreshCw className="w-4 h-4 text-pink-400" />
                    <span className="hidden sm:inline">Փոխել</span>
                  </button>
                </div>

                {/* Right controls: Walk Away & Back to Menu */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Walk Away with Money button */}
                  <button
                    onClick={handleWalkAway}
                    disabled={isAnswerLocked || isVerified || currentIndex === 0}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1 ${
                      currentIndex > 0 && !isAnswerLocked && !isVerified
                        ? 'bg-amber-950/80 border-amber-500 text-amber-300 hover:bg-amber-900 cursor-pointer shadow-amber-500/10'
                        : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                    }`}
                    title="Վերցնել գումարը և ավարտել խաղը"
                  >
                    <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Վերցնել</span>
                    <span className="font-cinzel font-bold">{currentPrizeAmount.toLocaleString()} $</span>
                  </button>

                  {/* Return to Menu Button */}
                  <button
                    onClick={() => setShowQuitConfirmModal(true)}
                    className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-medium border border-blue-800/80 bg-blue-950/70 hover:bg-rose-950/70 hover:border-rose-500/80 text-blue-300 hover:text-rose-200 transition-colors flex items-center gap-1 shadow cursor-pointer"
                    title="Վերադառնալ մենյու (Հետ)"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Հետ</span>
                  </button>
                </div>
              </div>

              {/* Progress & Category Banner */}
              <div className="w-full max-w-3xl flex items-center justify-between px-2 mb-2 text-xs">
                <span className="text-amber-400 font-cinzel font-bold tracking-wider">
                  ՀԱՐՑ {currentIndex + 1} / {sessionQuestions.length} — {ladder[currentIndex]?.formattedAmount}
                </span>
                <span className="text-blue-300 font-medium bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800">
                  {currentQuestion.categoryTitleEs}
                </span>
              </div>

              {/* =============================================== */}
              {/* THE QUESTION BOX (Interactive Click to Translate) */}
              {/* =============================================== */}
              <div
                onClick={handleQuestionClick}
                className="w-full max-w-3xl my-2 p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-2 border-amber-400/90 shadow-2xl shadow-blue-900/40 relative cursor-pointer hover:border-amber-300 transition-all group"
              >
                {/* Visual connectors left and right mimicking classic hexagon lines */}
                <div className="absolute top-1/2 -left-4 w-4 h-0.5 bg-amber-400 hidden sm:block" />
                <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-amber-400 hidden sm:block" />

                {/* Translation hint badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    🇦🇲 Սեղմեք հարցի վրա՝ թարգմանությունը տեսնելու համար
                  </span>
                  <span className="text-[10px] text-blue-300/80">
                    {showArmenianQuestion ? 'Թարգմանությունը բացված է' : 'Թարգմանել'}
                  </span>
                </div>

                {/* Spanish Question (Main) */}
                <div className="text-center font-bold text-lg sm:text-2xl text-slate-100 tracking-wide font-sans py-1">
                  🇪🇸 {currentQuestion.esQuestion}
                </div>

                {/* Armenian Question (Revealed on click) */}
                {(showArmenianQuestion || alwaysShowArmenian) && (
                  <div className="mt-3 pt-3 border-t border-blue-800/80 text-center text-sm sm:text-lg text-amber-200 font-armenian font-semibold animate-fadeIn">
                    🇦🇲 {currentQuestion.hyQuestion}
                  </div>
                )}
              </div>

              {/* =============================================== */}
              {/* THE 4 OPTIONS (A, B, C, D) */}
              {/* =============================================== */}
              <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-2">
                {currentQuestion.options.map((option: OptionItem) => {
                  const isSelected = selectedKey === option.key;
                  const isOptionDisabled = disabledOptions.includes(option.key);
                  const isOptionCorrect = option.key === currentQuestion.correctAnswer;
                  const showArmenianOption = revealedOptionTranslations[option.key] || alwaysShowArmenian || isVerified;

                  // Compute dynamic button styling based on TV game stages
                  let buttonStyle = 'bg-slate-950/90 border-blue-800/90 text-slate-200 hover:border-amber-400 hover:bg-blue-950';

                  if (isOptionDisabled) {
                    buttonStyle = 'bg-slate-950/40 border-slate-900 text-slate-700 opacity-20 cursor-not-allowed';
                  } else if (isVerified) {
                    if (isOptionCorrect) {
                      buttonStyle = 'animate-correct-answer border-emerald-400 text-white font-bold';
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = 'bg-rose-950 border-rose-500 text-rose-200';
                    } else {
                      buttonStyle = 'bg-slate-950/70 border-slate-800 text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    if (isAnswerLocked) {
                      buttonStyle = 'animate-final-answer text-white font-bold';
                    } else {
                      buttonStyle = 'bg-amber-600/90 border-yellow-300 text-white shadow-lg shadow-amber-500/30';
                    }
                  }

                  return (
                    <div
                      key={option.key}
                      onClick={() => !isOptionDisabled && handleSelectOption(option.key)}
                      className={`relative p-3.5 sm:p-4 rounded-xl border-2 transition-all flex flex-col justify-between cursor-pointer ${buttonStyle}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          {/* Option letter badge (A:, B:, C:, D:) */}
                          <span className={`font-cinzel font-black text-sm sm:text-base px-2 py-0.5 rounded ${
                            isSelected ? 'bg-amber-300 text-slate-950' : 'text-amber-400 bg-amber-400/10'
                          }`}>
                            {option.key}:
                          </span>
                          <span className="text-base sm:text-lg font-semibold tracking-wide">
                            {option.text}
                          </span>
                        </div>

                        {/* Button to toggle Armenian translation of this specific option */}
                        {!isOptionDisabled && (
                          <button
                            onClick={(e) => handleOptionTranslationToggle(e, option.key)}
                            className="p-1 rounded text-xs text-blue-300 hover:text-amber-300 bg-blue-950/50 hover:bg-blue-900/60 border border-blue-800/60 transition-colors"
                            title="Տեսնել տարբերակի հայերեն բացատրությունը"
                          >
                            🇦🇲 {showArmenianOption ? 'Փակել' : 'Թարգմանել'}
                          </button>
                        )}
                      </div>

                      {/* Armenian translation/explanation of option */}
                      {showArmenianOption && !isOptionDisabled && (
                        <div className="mt-2 pt-1.5 border-t border-blue-900/60 text-xs sm:text-sm text-cyan-200 font-armenian">
                          🇦🇲 {option.hyText}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons: Final Answer Confirmation / Next Question */}
              <div className="w-full max-w-3xl mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Information hint */}
                <div className="text-xs text-blue-300/80 font-armenian text-center sm:text-left">
                  {!selectedKey && !isVerified && (
                    <span>💡 Ընտրեք պատասխանը և սեղմեք «Վերջնական Պատասխան»։</span>
                  )}
                  {selectedKey && !isAnswerLocked && !isVerified && (
                    <span className="text-amber-300 font-medium">
                      Դուք ընտրել եք տարբերակ {selectedKey}-ը։ Հաստատո՞ւմ եք։
                    </span>
                  )}
                  {isAnswerLocked && !isVerified && (
                    <span className="text-yellow-400 animate-pulse font-semibold">
                      Ստուգում ենք պատասխանը...
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Final Answer Button */}
                  {!isVerified && (
                    <button
                      onClick={handleLockInAnswer}
                      disabled={!selectedKey || isAnswerLocked}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-cinzel text-sm sm:text-base border-2 transition-all flex items-center justify-center gap-2 shadow-xl ${
                        selectedKey && !isAnswerLocked
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-yellow-200 text-slate-950 hover:brightness-110 cursor-pointer shadow-amber-500/30'
                          : 'bg-slate-900 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      Վերջնական Պատասխան
                    </button>
                  )}

                  {/* Next Question / Game Over Button */}
                  {isVerified && (
                    <>
                      {isCorrect ? (
                        <button
                          onClick={handleNextQuestion}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-armenian text-sm sm:text-base bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-300 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 cursor-pointer animate-bounce"
                        >
                          Հաջորդ Հարցը <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            sound.stopSuspenseMusic();
                            setGameState('gameover');
                          }}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-armenian text-sm sm:text-base bg-rose-700 hover:bg-rose-600 text-white border-2 border-rose-300 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                        >
                          Դիտել Արդյունքը <LogOut className="w-4 h-4" />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* =============================================== */}
              {/* EXPLANATION CARD (Visible upon verification) */}
              {/* =============================================== */}
              {isVerified && (
                <div className={`w-full max-w-3xl mt-5 p-4 sm:p-5 rounded-xl border-2 backdrop-blur-md shadow-xl animate-fadeIn ${
                  isCorrect ? 'bg-emerald-950/70 border-emerald-500/80 text-emerald-100' : 'bg-rose-950/70 border-rose-500/80 text-rose-100'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg mb-2">
                    {isCorrect ? (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" /> Ճիշտ պատասխան! (+{ladder[currentIndex]?.formattedAmount})
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-rose-400">
                        <XCircle className="w-5 h-5" /> Ցավոք, սխալ պատասխան: Ճիշտն է՝ {currentQuestion.correctAnswer}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm font-armenian text-slate-200">
                    <p className="font-semibold text-amber-300">
                      🇦🇲 Բացատրություն՝ {currentQuestion.explanationHy}
                    </p>
                    <p className="text-blue-200 text-xs italic font-sans">
                      🇪🇸 {currentQuestion.explanationEs}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Area (Desktop): Authentic Money Prize Ladder */}
            <div className="hidden lg:block lg:col-span-1 bg-slate-950/90 border-2 border-blue-900/80 rounded-2xl p-3 sm:p-4 shadow-2xl">
              <div className="text-center pb-3 border-b border-blue-800/80 mb-3">
                <h3 className="font-cinzel font-bold text-amber-400 tracking-wider text-sm">
                  ՄՐՑԱՆԱԿԱՅԻՆ ՍԱՆԴՈՒՂՔ
                </h3>
                <p className="text-[11px] text-blue-300">
                  Երաշխավորված՝ <span className="font-cinzel text-amber-300 font-bold">{guaranteedAmount.toLocaleString()} $</span>
                </p>
              </div>

              {/* Ladder Rows */}
              <div className="flex flex-col-reverse gap-1 max-h-[580px] overflow-y-auto pr-1">
                {ladder.map((step, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isPast = idx < currentIndex;
                  const isMilestone = step.isMilestone;

                  let rowStyle = 'text-blue-300/80 hover:bg-blue-950/50';

                  if (isCurrent) {
                    rowStyle = 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/40 rounded scale-[1.02]';
                  } else if (isPast) {
                    rowStyle = 'text-emerald-400 font-semibold';
                  } else if (isMilestone) {
                    rowStyle = 'text-amber-300 font-bold border-l-2 border-amber-400 pl-1.5';
                  }

                  return (
                    <div
                      key={step.level}
                      className={`flex items-center justify-between px-2.5 py-1 text-xs rounded transition-all ${rowStyle}`}
                    >
                      <span className="font-cinzel font-bold w-6">{step.level}</span>
                      <span className="font-cinzel font-semibold tracking-wider">
                        {step.formattedAmount}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 3. GAME OVER SCREEN */}
        {/* ======================================================== */}
        {gameState === 'gameover' && (
          <div className="max-w-xl mx-auto w-full bg-slate-900/90 border border-blue-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center">
            <div className="inline-flex p-4 rounded-full bg-rose-950/80 border-2 border-rose-500 text-rose-400 mb-4">
              <Award className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-amber-300 mb-2">
              ԽԱՂՆ ԱՎԱՐՏՎԵՑ
            </h2>

            <p className="text-sm text-blue-200 mb-6 font-armenian">
              Դուք հասել եք հարց {currentIndex + 1}-ին և վաստակել.
            </p>

            <div className="bg-slate-950/80 border-2 border-amber-400/80 rounded-xl p-5 mb-6">
              <span className="text-xs text-blue-400 font-armenian">Ձեր շահումը</span>
              <div className="text-3xl sm:text-4xl font-black font-cinzel text-amber-400 mt-1 gold-glow">
                {(isCorrect ? currentPrizeAmount : guaranteedAmount).toLocaleString()} $
              </div>
              <p className="text-xs text-blue-300/80 mt-1">
                {guaranteedAmount > 0 ? 'Երաշխավորված գումարը պահպանված է' : 'Չկայացած երաշխավորված գումար'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => startGame(gameMode)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold font-armenian bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <RotateCcw className="w-4 h-4" /> Կրկին Խաղալ
              </button>

              <button
                onClick={() => setGameState('welcome')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium font-armenian bg-blue-950 hover:bg-blue-900 border border-blue-700 text-blue-200 transition-all cursor-pointer"
              >
                Գլխավոր Մենյու
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. VICTORY / MILLIONAIRE WON SCREEN */}
        {/* ======================================================== */}
        {gameState === 'won' && (
          <div className="max-w-2xl mx-auto w-full bg-slate-900/95 border-2 border-amber-400 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden animate-fadeIn">
            {/* Confetti Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-amber-500/20 pointer-events-none" />

            <div className="inline-flex p-5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 mb-4 shadow-xl shadow-amber-400/40 animate-bounce">
              <Award className="w-16 h-16" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-100 gold-glow mb-2">
              ՇՆՈՐՀԱՎՈՐՈՒՄ ԵՆՔ!
            </h2>

            <p className="text-base sm:text-lg text-amber-200 font-armenian mb-4">
              Դուք պատասխանեցիք բոլոր հարցերին և դարձաք
            </p>

            <div className="text-4xl sm:text-6xl font-black font-cinzel text-amber-300 gold-glow mb-6 tracking-wider">
              1,000,000 $
            </div>

            <p className="text-sm text-blue-200 font-armenian max-w-md mx-auto mb-8">
              Դուք փայլուն տիրապետում եք իսպաներենի անցյալ ժամանակներին (Pasados) և ուղիղ ու անուղղակի դերանուններին (Pronombres)։
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => startGame(gameMode)}
                className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold font-armenian bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/30"
              >
                <RotateCcw className="w-5 h-5" /> Խաղալ Նորից
              </button>

              <button
                onClick={() => setGameState('welcome')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium font-armenian bg-blue-950 hover:bg-blue-900 border border-blue-700 text-blue-200 transition-all cursor-pointer"
              >
                Գլխավոր Մենյու
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ======================================================== */}
      {/* LIFELINE MODAL: AUDIENCE POLL */}
      {/* ======================================================== */}
      {audienceModalData && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-cyan-400 rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setAudienceModalData(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold font-armenian text-lg">
              <Users className="w-5 h-5" /> Դահլիճի Օգնություն (Audience Poll)
            </div>

            <p className="text-xs text-blue-200 mb-5 font-armenian">
              Դահլիճի հանդիսատեսների քվեարկության արդյունքները.
            </p>

            <div className="grid grid-cols-4 gap-3 items-end h-44 pb-2 border-b border-blue-800">
              {(['A', 'B', 'C', 'D'] as const).map(k => {
                const percent = audienceModalData[k];
                return (
                  <div key={k} className="flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-xs font-bold text-cyan-300 font-cinzel">{percent}%</span>
                    <div
                      style={{ height: `${percent}%` }}
                      className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-400 transition-all duration-700 shadow-lg shadow-cyan-500/20"
                    />
                    <span className="font-cinzel font-black text-sm text-amber-400">{k}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setAudienceModalData(null)}
              className="w-full mt-5 py-2.5 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
            >
              Հասկանալի է
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* LIFELINE MODAL: PHONE A FRIEND */}
      {/* ======================================================== */}
      {phoneModalMessage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-emerald-400 rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setPhoneModalMessage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold font-armenian text-lg">
              <PhoneCall className="w-5 h-5" /> Զանգ Ընկերոջը (Իսպաներենի մասնագետ)
            </div>

            <div className="bg-slate-950/80 border border-blue-900 rounded-xl p-4 my-3 text-sm text-slate-200 font-armenian leading-relaxed">
              {phoneModalMessage}
            </div>

            <button
              onClick={() => setPhoneModalMessage(null)}
              className="w-full mt-3 py-2.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
            >
              Շնորհակալություն, շարունակել
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* GRAMMAR REFERENCE & RULES MODAL */}
      {/* ======================================================== */}
      {showGrammarModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="bg-slate-900 border-2 border-blue-700 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative animate-fadeIn overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-blue-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2 text-amber-300 font-bold font-cinzel text-lg">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Իսպաներենի Քերականության Կանոններ</span>
              </div>
              <button
                onClick={() => setShowGrammarModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Rules Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-200 font-armenian">
              {/* Part 1: Pasados */}
              <div className="space-y-3">
                <h4 className="font-bold text-amber-400 text-base border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
                  1. Անցյալ ժամանակներ (Pasados 1–30)
                </h4>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-1.5">
                  <span className="font-bold text-cyan-300">{GRAMMAR_GUIDE.pasados.perfecto.name}</span>
                  <p className="text-xs text-blue-200">{GRAMMAR_GUIDE.pasados.perfecto.usageHy}</p>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-1.5">
                  <span className="font-bold text-cyan-300">{GRAMMAR_GUIDE.pasados.indefinido.name}</span>
                  <p className="text-xs text-blue-200">{GRAMMAR_GUIDE.pasados.indefinido.usageHy}</p>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-1.5">
                  <span className="font-bold text-cyan-300">{GRAMMAR_GUIDE.pasados.imperfecto.name}</span>
                  <p className="text-xs text-blue-200">{GRAMMAR_GUIDE.pasados.imperfecto.usageHy}</p>
                </div>
              </div>

              {/* Part 2: Pronombres */}
              <div className="space-y-3">
                <h4 className="font-bold text-amber-400 text-base border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
                  2. Ուղիղ և Անուղղակի դերանուններ (Pronombres 31–50)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-1">
                    <span className="font-bold text-emerald-400">{GRAMMAR_GUIDE.pronombres.directos.name}</span>
                    <p className="text-xs text-slate-300 font-semibold">{GRAMMAR_GUIDE.pronombres.directos.items}</p>
                    <p className="text-xs text-blue-300 italic pt-1">{GRAMMAR_GUIDE.pronombres.directos.example}</p>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-1">
                    <span className="font-bold text-purple-400">{GRAMMAR_GUIDE.pronombres.indirectos.name}</span>
                    <p className="text-xs text-slate-300 font-semibold">{GRAMMAR_GUIDE.pronombres.indirectos.items}</p>
                    <p className="text-xs text-blue-300 italic pt-1">{GRAMMAR_GUIDE.pronombres.indirectos.example}</p>
                  </div>
                </div>

                {/* Important Key Rule le/les -> se */}
                <div className="bg-amber-950/40 p-4 rounded-xl border-2 border-amber-500/80 space-y-2">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    {GRAMMAR_GUIDE.pronombres.keyRule.titleHy}
                  </div>
                  <p className="text-xs text-amber-100 font-medium">
                    {GRAMMAR_GUIDE.pronombres.keyRule.textHy}
                  </p>
                  <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 pt-1 font-mono">
                    {GRAMMAR_GUIDE.pronombres.keyRule.examples.map((ex, i) => (
                      <li key={i}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-blue-800 bg-slate-950/60 flex justify-end">
              <button
                onClick={() => setShowGrammarModal(false)}
                className="px-5 py-2 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                Փակել
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE PRIZE LADDER DRAWER */}
      {/* ======================================================== */}
      {showLadderDrawer && (
        <div className="fixed inset-0 z-50 bg-black/80 lg:hidden flex justify-end">
          <div className="w-72 bg-slate-950 border-l border-blue-800 h-full p-4 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-blue-800 mb-3">
                <span className="font-cinzel font-bold text-amber-400 text-sm">ՍԱՆԴՈՒՂՔ</span>
                <button
                  onClick={() => setShowLadderDrawer(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col-reverse gap-1 max-h-[70vh] overflow-y-auto pr-1">
                {ladder.map((step, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isPast = idx < currentIndex;
                  const isMilestone = step.isMilestone;

                  let rowStyle = 'text-blue-300/80';
                  if (isCurrent) {
                    rowStyle = 'bg-amber-500 text-slate-950 font-bold rounded';
                  } else if (isPast) {
                    rowStyle = 'text-emerald-400 font-semibold';
                  } else if (isMilestone) {
                    rowStyle = 'text-amber-300 font-bold border-l-2 border-amber-400 pl-1.5';
                  }

                  return (
                    <div
                      key={step.level}
                      className={`flex items-center justify-between px-2.5 py-1.5 text-xs ${rowStyle}`}
                    >
                      <span className="font-cinzel font-bold">{step.level}</span>
                      <span className="font-cinzel font-semibold">{step.formattedAmount}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setShowLadderDrawer(false)}
              className="w-full py-2.5 rounded-xl font-bold bg-blue-900 text-blue-200 mt-4"
            >
              Փակել
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CONFIRM RETURN TO MENU MODAL */}
      {/* ======================================================== */}
      {showQuitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-amber-400/90 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-fadeIn text-center">
            <button
              onClick={() => setShowQuitConfirmModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex p-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/40 mb-3">
              <Home className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold font-cinzel text-amber-300 mb-2">
              Վերադառնա՞լ Գլխավոր Մենյու
            </h3>

            <p className="text-sm text-blue-200 mb-5 font-armenian">
              Ընթացիկ խաղի առաջընթացը կավարտվի։ Վստա՞հ եք, որ ցանկանում եք դուրս գալ մենյու։
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReturnToMenu}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold font-armenian bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Այո, Վերադառնալ
              </button>

              <button
                onClick={() => setShowQuitConfirmModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium font-armenian bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                Շարունակել Խաղը
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
