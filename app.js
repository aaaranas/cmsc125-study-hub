// ════════════════════════════════════════
// TOPICS DATA
// ════════════════════════════════════════
const TOPICS = [
// ─────────────────────────────────────────
// 1. CONCURRENT PROGRAMMING
// ─────────────────────────────────────────
{
  id: 'concurrent', name: 'Concurrent Programming', color: '#6366f1', icon: '⚡',
  terms: [
    { term: 'Concurrent Programming',    def: 'Studies programs with multiple processes executing simultaneously, requiring coordination to manage shared resources and avoid conflicts.' },
    { term: 'Decomposition',             def: 'Breaking a problem into smaller tasks that can run independently or in parallel.' },
    { term: 'Parallelism',               def: 'Tasks that actually run at the same time on multiple processors or cores.' },
    { term: 'Synchronization',           def: 'Mechanisms such as locks, semaphores, and monitors used to coordinate concurrent processes and prevent interference.' },
    { term: 'Shared Resources',          def: 'Memory or resources (variables, files, databases) accessed by multiple concurrent tasks simultaneously.' },
    { term: 'Process Isolation',         def: 'Protecting the memory and resources of one process from interference by another, maintaining system stability.' },
    { term: 'Atomic Operations',         def: 'Operations that complete fully or not at all — no intermediate state is visible to other processes.' },
    { term: 'Deadlock',                  def: 'A state where two or more processes are permanently blocked, each waiting for a resource held by the other.' },
    { term: 'Semaphore',                 def: 'A synchronization tool with an internal counter and two atomic operations — wait() and signal() — to manage shared resource access.' },
    { term: 'Binary Semaphore',          def: 'A semaphore with only values 0 and 1, used for mutual exclusion — only one process enters the critical section at a time.' },
    { term: 'Counting Semaphore',        def: 'A semaphore with values 0 to any positive integer, used when multiple instances of a resource are available.' },
    { term: 'wait()',                    def: 'Decrements the semaphore counter; blocks the process if the counter reaches 0. Used to acquire a resource.' },
    { term: 'signal()',                  def: 'Increments the semaphore counter; wakes a blocked thread if counter ≤ 0. Used to release a resource.' },
    { term: 'Mutual Exclusion',          def: 'The guarantee that only one process can be in the critical section at a time, preventing race conditions.' },
    { term: 'Message Passing',           def: 'A communication mechanism where processes interact by sending and receiving messages — an alternative to shared memory.' },
    { term: 'Synchronous Communication', def: 'The sender blocks until the receiver accepts the message; follows a request–response interaction pattern.' },
    { term: 'Asynchronous Communication',def: 'The sender sends a message and continues execution without waiting for the receiver to accept it.' },
    { term: 'Monitor',                   def: 'A high-level synchronization construct grouping data and procedures so only one process can be active inside it at a time.' },
    { term: 'Race Condition',            def: 'Program outcome depends on the relative timing of processes, leading to unpredictable and incorrect results.' },
    { term: 'Critical Section',          def: 'A code segment that accesses shared resources and must be executed by only one process at a time.' },
    { term: 'Busy Waiting',              def: 'A CPU spins in a loop checking a variable instead of blocking, wasting CPU cycles.' },
    { term: 'Time Sharing',              def: 'The OS rapidly swaps between tasks, giving the illusion of simultaneous execution to multiple users.' },
    { term: 'Time Slicing',              def: 'Dividing CPU time into small intervals (quanta) allocated to processes in rotation.' },
    { term: 'CSP',                       def: 'Communicating Sequential Processes — a formal model where processes communicate through channels, eliminating shared memory risks.' },
    { term: 'Actor Model',               def: 'A concurrency model where independent actors communicate via message passing, each maintaining its own local state.' },
    { term: "Dekker's Algorithm",        def: 'An early software mutual exclusion solution using shared flag variables and a turn variable, without hardware support.' },
    { term: "Peterson's Algorithm",      def: 'A software algorithm using flag and turn variables to achieve mutual exclusion for two processes without hardware.' },
    { term: 'Language-Level Support',    def: 'High-level constructs like monitors that make concurrency safer, reduce programmer errors, and improve code clarity.' }
  ],
  outline: [
    { title: 'Concurrent Programming', desc: 'Studies programs with multiple processes executing simultaneously', items: [] },
    { title: 'Basic Principles', desc: '', items: ['Decomposition — breaking a problem into smaller tasks that can run independently or in parallel', 'Parallelism — tasks that actually run at the same time on multiple processors or cores', 'Synchronization — coordinating concurrent processes via locks, semaphores, and monitors', 'Shared Resources — memory or resources accessed by multiple concurrent tasks simultaneously', 'Process Isolation — protecting each process\'s memory from interference by another', 'Atomic Operations — complete fully or not at all; no intermediate state visible', 'Deadlock Avoidance — preventing circular resource waiting among processes', 'Communication — passing messages between concurrent tasks'] },
    { title: 'Early Approaches to Concurrency', desc: '', items: ['Algorithmic / "Logic" Era — purely algorithmic mutual exclusion (Dekker\'s, Peterson\'s)', 'Synchronization Primitives / "Signaling" Era — semaphores introduced by Dijkstra', 'Formal Models / "Message" Era — CSP, Actor Model, channel-based communication', 'OS Mechanisms / "Scheduling" Era — monitors, language-level support, thread libraries'] },
    { title: 'Semaphores', desc: 'A synchronization tool with an internal counter and two atomic operations', items: ['wait() — decrements counter; blocks the process if counter reaches 0', 'signal() — increments counter; wakes a blocked thread if counter ≤ 0', 'State diagram: S=1 (resource free) → wait() → S=0 (in use) → signal() → S=1', 'Binary Semaphore — values 0 or 1 only; used for mutual exclusion', 'Counting Semaphore — values 0 to any positive integer; N instances of a resource'] },
    { title: 'Message Passing', desc: 'An alternative to shared memory — processes communicate by sending and receiving messages', items: ['Why needed: shared memory requires explicit locks; message passing provides natural isolation', 'Synchronous communication — sender blocks until receiver accepts the message', 'Asynchronous communication — sender continues without waiting for the receiver', 'CSP (Communicating Sequential Processes) — formal channel-based model', 'Actor Model — independent actors communicate via message queues'] },
    { title: 'Language-Level Support', desc: '', items: ['Thread libraries — OS-provided (pthreads, Java threads, .NET threads)', 'Monitors — high-level construct grouping data and procedures; only one process active inside at a time', 'Monitor structure: shared variables, condition variables, synchronized procedures', 'Condition variables — wait() and signal() inside a monitor for coordinated waiting', 'Java support — synchronized keyword, wait(), notify(), notifyAll()', 'Libraries vs. Monitors: libraries require manual lock management; monitors enforce mutual exclusion automatically'] }
  ],
  steps: [
    { title: 'Semaphore wait() Operation', steps: ['Check semaphore counter S', 'If S > 0: decrement S by 1, allow the process into the critical section', 'If S = 0: block the process and add it to the waiting queue', 'Process remains suspended until another process calls signal()'] },
    { title: 'Semaphore signal() Operation', steps: ['Increment semaphore counter S by 1', 'Check if any processes are in the waiting queue', 'If queue is non-empty: wake up one blocked process', 'The awakened process proceeds when scheduled by the OS'] }
  ],
  exams: {
    tf: [
      { q: 'A binary semaphore can have values greater than 1.', a: false, exp: 'A binary semaphore only has values 0 and 1.' },
      { q: 'Synchronous communication requires the sender to wait until the receiver accepts the message.', a: true, exp: 'In synchronous communication, the sender blocks until the receiver accepts.' },
      { q: 'Busy waiting is an efficient use of CPU resources.', a: false, exp: 'Busy waiting wastes CPU cycles by continuously polling a variable instead of blocking.' },
      { q: 'Atomic operations can be interrupted partway through their execution.', a: false, exp: 'Atomic operations either complete fully or not at all — they cannot be interrupted mid-execution.' },
      { q: 'Message passing eliminates the risk of two processes accidentally modifying the same data.', a: true, exp: 'Message passing uses isolated channels, not shared memory, preventing data corruption.' },
      { q: 'A monitor allows multiple processes to execute inside it simultaneously.', a: false, exp: 'A monitor ensures only one process can be active inside it at a time.' },
      { q: 'Deadlock can occur when two processes each hold a resource the other needs.', a: true, exp: 'This circular wait is the classic deadlock condition.' },
      { q: "Peterson's Algorithm requires special hardware to work.", a: false, exp: "Peterson's Algorithm is a pure software solution using only shared variables." }
    ],
    id: [
      { q: 'The semaphore operation that decrements the counter and blocks if zero.', a: 'wait()' },
      { q: 'The semaphore operation that increments the counter and wakes a blocked process.', a: 'signal()' },
      { q: 'A semaphore with only values 0 and 1, used for mutual exclusion.', a: 'Binary Semaphore' },
      { q: 'A CPU spinning in a loop checking a variable instead of blocking.', a: 'Busy Waiting' },
      { q: 'A formal concurrency model where processes communicate through channels without shared memory.', a: 'CSP (Communicating Sequential Processes)' },
      { q: 'A high-level synchronization construct with exclusive entry, grouping data and functions.', a: 'Monitor' },
      { q: 'Two or more processes permanently blocked waiting for each other\'s resources.', a: 'Deadlock' },
      { q: 'Operations that complete fully or not at all, with no intermediate state visible.', a: 'Atomic Operations' }
    ],
    essay: [
      { q: 'Explain the difference between binary and counting semaphores, and give a use case for each.', a: 'A binary semaphore has only two values — 0 and 1 — and is used for mutual exclusion, ensuring that only one process can access a critical section at a time, such as controlling access to a single printer so only one job prints at once. A counting semaphore can hold any non-negative integer value and is used when multiple instances of a resource are available; for example, if a system has five database connections, the semaphore is initialized to 5, and each process decrements it on acquisition and increments it on release, so when the count reaches 0, further requests block until a connection is freed.' },
      { q: 'Compare message passing with shared memory as concurrency mechanisms. What are the advantages and disadvantages of each?', a: 'Shared memory allows processes to communicate by reading and writing to common variables, which is fast because there is no serialization overhead, but it requires careful synchronization via locks or semaphores to prevent race conditions and is difficult to extend to distributed systems where processes run on different machines. Message passing, used in models like CSP and the Actor Model, has processes communicate by sending messages through channels, which naturally provides isolation so one process cannot corrupt another\'s memory and works safely across distributed networks, but it introduces overhead from message serialization and transmission and can be slower than direct memory access for tightly coupled tasks on a single machine.' },
      { q: 'Describe the four conditions for deadlock and explain one strategy to prevent it.', a: 'Deadlock requires four simultaneous conditions: mutual exclusion (a resource can only be held by one process at a time), hold-and-wait (a process holds at least one resource while waiting for others), no preemption (resources cannot be forcibly taken from a process), and circular wait (a cycle exists where each process waits for a resource held by the next). One effective prevention strategy is to eliminate circular wait by imposing a strict global ordering on all resources and requiring that every process request resources only in ascending order of that numbering, making it impossible for a circular dependency to form among any set of waiting processes.' }
    ],
    ps: [
      { q: 'Two processes P1 and P2 share a semaphore S initialized to 1. P1 executes wait(S), then P2 executes wait(S). What is the state of S and P2 after these operations?', a: 'S = 0; P2 is blocked in the waiting queue.', steps: ['S starts at 1', 'P1 executes wait(S): S becomes 0, P1 enters critical section', 'P2 executes wait(S): S = 0, so P2 is BLOCKED and added to the waiting queue', 'Final state: S = 0, P2 suspended — unblocks only when P1 calls signal()'] }
    ]
  }
},
// ─────────────────────────────────────────
// 2. MEMORY MANAGEMENT
// ─────────────────────────────────────────
{
  id: 'memory', name: 'Memory Management', color: '#10b981', icon: '🧠',
  terms: [
    { term: 'Memory Management',       def: 'The OS function tracking, allocating, protecting, and coordinating RAM among all running processes. Five responsibilities: isolation, allocation, modular support, protection, long-term storage.' },
    { term: 'Virtual Memory',          def: 'Allows programs to address memory logically beyond physical RAM, with the OS and MMU managing virtual-to-physical mapping.' },
    { term: 'Page',                    def: 'A fixed-size block of virtual address space (typically 4KB–8KB), the unit of memory allocation in paging systems.' },
    { term: 'Frame',                   def: 'A fixed-size block of physical RAM that corresponds in size to a page.' },
    { term: 'Page Fault',              def: 'An interrupt when a process accesses a page not in physical memory, causing the OS to load it from disk.' },
    { term: 'Page Table',              def: 'An OS data structure mapping virtual page numbers to physical frame numbers.' },
    { term: 'TLB',                     def: 'Translation Lookaside Buffer — a fast hardware cache storing recent virtual-to-physical address mappings to speed up translation.' },
    { term: 'MMU',                     def: 'Memory Management Unit — hardware component translating virtual addresses to physical addresses using the page table.' },
    { term: 'Fixed Partitioning',      def: 'Memory divided into a fixed number of static regions at system generation time. Causes internal fragmentation.' },
    { term: 'Dynamic Partitioning',    def: 'Allocates exactly as much memory as a process needs. Flexible but causes external fragmentation over time.' },
    { term: 'Internal Fragmentation',  def: 'Wasted space inside a partition because the process is smaller than its fixed-size partition.' },
    { term: 'External Fragmentation',  def: 'Enough total free memory exists but it is not contiguous — scattered as small unusable holes.' },
    { term: 'Compaction',              def: 'Shuffles memory contents to consolidate all free space into one contiguous block. CPU-intensive operation.' },
    { term: 'First-Fit',               def: 'Scans memory from the beginning and selects the first hole large enough for the request.' },
    { term: 'Best-Fit',                def: 'Searches all holes and selects the smallest one still large enough, minimizing leftover wasted space.' },
    { term: 'Next-Fit',                def: 'Like First-Fit but begins scanning from the location of the last allocation.' },
    { term: 'Worst-Fit',               def: 'Selects the largest available hole, reasoning the leftover fragment will remain usable for future requests.' },
    { term: 'Demand Paging',           def: 'Loads pages into RAM only when needed (triggered by a page fault). Memory-efficient but causes more page faults.' },
    { term: 'Prepaging',               def: 'Loads pages before they are referenced based on spatial locality prediction. Reduces faults but may waste memory.' },
    { term: 'FIFO Page Replacement',   def: 'Evicts the page that has been in memory the longest. Simple but susceptible to Belady\'s Anomaly.' },
    { term: 'OPT Algorithm',           def: 'Evicts the page not needed for the longest time in the future. Theoretically optimal but not implementable — requires future knowledge.' },
    { term: 'LRU',                     def: 'Least Recently Used — evicts the page not used for the longest time. Excellent performance but requires hardware support.' },
    { term: 'Clock Algorithm',         def: 'Second-Chance — FIFO with a reference bit check. If bit=1, give second chance and clear; if bit=0, evict.' },
    { term: 'Aging Algorithm',         def: 'Each page has an 8-bit shift register updated each tick with the reference bit. A software LRU approximation.' },
    { term: 'Working Set Model',       def: 'Tracks the set of pages actively used within time window Δ and allocates exactly that many frames, preventing thrashing.' },
    { term: 'Thrashing',               def: 'The OS spends more time swapping pages than executing instructions, caused by insufficient frames per process.' },
    { term: 'WSS',                     def: 'Working Set Size — the number of unique pages referenced by a process within its working set window Δ.' },
    { term: 'Dirty Bit',               def: 'Flags whether a page has been modified. If set, the page must be written to disk before being replaced.' },
    { term: 'Reference Bit',           def: 'Hardware flag indicating whether a page was accessed recently. Reset periodically by the OS for LRU approximations.' },
    { term: "Belady's Anomaly",        def: 'Adding more frames can increase page faults in FIFO — a counterintuitive phenomenon unique to the FIFO algorithm.' },
    { term: 'Single Segment Virtual Store', def: 'One large flat virtual address space per process, divided into pages. Used by Linux and Windows. Address = [Page# | Offset].' },
    { term: 'Multiple Segment Virtual Store', def: 'Multiple independent address spaces (segments) per process — code, data, stack — each with its own base, limit, and protection bits.' },
    { term: 'Segmentation Fault',      def: 'Error triggered when an access offset exceeds a segment\'s limit or violates its protection bits.' },
    { term: 'PFF',                     def: 'Page Fault Frequency — high fault rate → allocate more frames; low fault rate → reclaim frames. A key load control metric.' },
    { term: 'Load Control',            def: 'OS policies determining how many processes should reside in memory at once to prevent thrashing, implemented via the medium-term scheduler.' },
    { term: 'LFU',                     def: 'Least Frequently Used — evicts the page with the smallest reference count. Problem: heavily initialized pages may linger long after use.' },
    { term: 'MFU',                     def: 'Most Frequently Used — evicts the page with the largest count, reasoning the least-used page was probably just loaded.' },
    { term: 'Temporal Locality',       def: 'Recently accessed memory is likely accessed again soon (e.g., a loop body executing the same instructions thousands of times).' },
    { term: 'Spatial Locality',        def: 'Memory near a recently accessed location is likely accessed soon (e.g., reading sequential array elements).' },
    { term: 'Copy-on-Write (COW)',     def: 'Shared read-only pages remain shared until one process writes; then a private copy is made automatically.' },
    { term: 'Inverted Page Table',     def: 'One entry per physical frame instead of per virtual page. Saves memory for large 64-bit address spaces.' },
    { term: 'Multi-Level Page Table',  def: 'Hierarchical page tables that only create entries for portions of the virtual address space actually in use.' }
  ],
  outline: [
    { title: 'What is Memory Management', desc: 'The OS function tracking, allocating, protecting, and coordinating RAM among all running processes', items: ['Track which memory is in use and which is free', 'Allocate memory to processes when requested', 'Deallocate (reclaim) memory when processes release it', 'Five key responsibilities: isolation, allocation, modular support, protection, long-term storage'] },
    { title: 'Memory Hierarchy & Requirements', desc: '', items: ['Memory Hierarchy: Registers → Cache → RAM → Disk', 'Relocation — process can be loaded into any memory area', 'Protection — process cannot access another\'s memory without permission', 'Sharing — multiple processes can share certain memory regions', 'Logical Organization — program viewed as modules, not one flat space', 'Physical Organization — OS moves data between RAM and disk as needed'] },
    { title: 'Managing Free Memory', desc: '', items: ['Bitmaps — one bit per allocation unit (1=free, 0=used); easy to maintain', 'Linked Lists — list of free and used segments; faster allocation searches', 'First-Fit — use first hole large enough (fast scan from start)', 'Best-Fit — use smallest sufficient hole (least leftover waste)', 'Next-Fit — First-Fit starting from last allocation point', 'Worst-Fit — use largest hole, leaving large remainder'] },
    { title: 'Memory Partitioning Schemes', desc: '', items: ['Fixed Partitioning — memory divided into static regions at boot; causes internal fragmentation', 'Dynamic Partitioning — allocates exactly the needed size; causes external fragmentation', 'Buddy System — splits/merges power-of-2 blocks; compromise between fixed and dynamic', 'Paging — fixed-size pages mapped to fixed-size frames; no external fragmentation', 'Segmentation — variable-size logical segments (code, data, stack) with separate protection'] },
    { title: 'Storage Management & Swapping', desc: '', items: ['Swapping — move entire process between RAM and disk to free memory', 'Paging design issues: page size tradeoffs, multi-level tables, TLB management', 'Locality of Reference — programs access a small set of addresses repeatedly', 'Temporal Locality — recently used addresses likely used again soon', 'Spatial Locality — nearby addresses likely accessed soon'] },
    { title: 'Virtual Memory', desc: 'Allows programs to address memory beyond physical RAM', items: ['MMU (Memory Management Unit) — hardware translating virtual to physical addresses', 'TLB (Translation Lookaside Buffer) — fast hardware cache of recent address mappings', 'Page Table — OS data structure mapping virtual page numbers to physical frames', 'Present bit — indicates whether the page is currently in RAM', 'Dirty bit — indicates the page was modified; must be written to disk before eviction'] },
    { title: 'Placement Algorithms (Team 3)', desc: 'How to choose which hole to use for a process', items: ['Fixed Partitioning — static regions; internal fragmentation', 'Dynamic Partitioning — exact size allocation; external fragmentation', 'First-Fit — scan from start; use first hole ≥ request size', 'Best-Fit — smallest hole still large enough; minimizes leftover', 'Next-Fit — First-Fit from last allocation point', 'Worst-Fit — largest hole; leaves biggest remainder'] },
    { title: 'Fetch Algorithms (Team 3)', desc: 'When to load pages into memory', items: ['Demand Paging — load page only when referenced (page fault triggers load)', 'Prepaging — load pages before they are needed; exploits spatial locality', 'Locality of Reference — basis for prepaging; programs cluster their accesses'] },
    { title: 'Page Replacement Algorithms (Team 3)', desc: 'Which page to evict when a free frame is needed', items: ['FIFO — evict oldest page; susceptible to Belady\'s Anomaly', 'OPT — evict page not needed for longest future time; optimal but not implementable', 'LRU Counter Method — timestamp each page access; evict smallest timestamp', 'LRU Stack Method — move page to top on access; evict bottom', 'Aging Algorithm — 8-bit shift register updated each tick; software LRU approximation', 'Second-Chance (Clock) — FIFO with reference bit; give one extra chance before eviction', 'Enhanced Second-Chance — uses both reference bit and modify bit (4 classes)', 'LFU — evict least frequently used page', 'MFU — evict most frequently used page'] },
    { title: 'Load Control & Thrashing (Team 3)', desc: '', items: ['Thrashing — OS spends more time swapping pages than executing; caused by insufficient frames', 'Working Set Model — track pages used in window Δ; allocate exactly that many frames (WSS)', 'Page Fault Frequency (PFF) — high fault rate → more frames; low rate → reclaim frames', 'L=S Criterion — balance fault resolution time with swap-in time', 'Medium-Term Scheduler — swap out entire processes to relieve memory pressure'] },
    { title: 'Virtual Store Models', desc: '', items: ['Single Segment Virtual Store — one flat virtual address space per process; address = [Page# | Offset]', 'Multiple Segment Virtual Store — separate segments for code, data, stack; each with own base, limit, protection', 'Segmentation Fault — access offset exceeds segment limit or violates protection bits'] }
  ],
  steps: [
    { title: 'Basic Page Replacement (5 Steps)', steps: ['Step 1 — FIND PAGE ON DISK: Locate the desired page in swap space', 'Step 2 — SELECT VICTIM FRAME: Run a replacement algorithm (FIFO, LRU, Clock…)', 'Step 3 — CHECK DIRTY BIT: Bit=0 → 1 disk op; Bit=1 → write victim to disk first (2 disk ops)', 'Step 4 — LOAD NEW PAGE: Read the desired page into the freed frame', 'Step 5 — RESUME PROCESS: Update page table, clear page fault, continue execution'] },
    { title: 'Virtual Address Translation', steps: ['CPU generates virtual address = [Page Number | Offset]', 'Check TLB — if HIT, get frame number immediately (fast path)', 'If TLB MISS, index into Page Table using the page number', 'Retrieve physical frame number from the page table entry', 'If present bit = 0 → PAGE FAULT → OS loads from disk, updates table', 'Physical Address = (Frame Number × Page Size) + Offset'] },
    { title: 'Best-Fit Placement Calculator', isCalc: true, calcType: 'bestfit' },
    { title: 'FIFO Page Replacement Simulator', isCalc: true, calcType: 'fifo' }
  ],
  exams: {
    tf: [
      { q: "FIFO page replacement can suffer from Belady's Anomaly.", a: true, exp: "FIFO is the only common algorithm susceptible to Belady's Anomaly." },
      { q: 'The OPT algorithm can be practically implemented in modern operating systems.', a: false, exp: 'OPT requires knowledge of future page references, which is impossible at runtime.' },
      { q: 'Internal fragmentation occurs in dynamic partitioning.', a: false, exp: 'Internal fragmentation occurs in FIXED partitioning. Dynamic partitioning causes external fragmentation.' },
      { q: 'Thrashing occurs when a process has too many frames allocated to it.', a: false, exp: 'Thrashing occurs when a process has too FEW frames to hold its working set.' },
      { q: 'The TLB is a software structure maintained by the OS.', a: false, exp: 'The TLB is a hardware cache in the CPU for fast address translation.' },
      { q: 'The Working Set Model prevents thrashing by ensuring each process has frames for its active pages.', a: true, exp: 'The Working Set Model allocates frames equal to the Working Set Size (WSS).' },
      { q: 'LRU approximation algorithms require the same hardware support as true LRU.', a: false, exp: 'LRU approximations (Clock/Aging) need only the reference bit, which most hardware already provides.' },
      { q: 'Copy-on-Write delays copying a page until one process writes to it.', a: true, exp: 'COW shares read-only pages until a write occurs, then creates a private copy.' }
    ],
    id: [
      { q: 'The page replacement algorithm evicting the page not needed for the longest future time.', a: 'OPT (Optimal Algorithm)' },
      { q: 'The condition where enough free memory exists but it is not contiguous.', a: 'External Fragmentation' },
      { q: 'A state where the OS spends more time paging than executing instructions.', a: 'Thrashing' },
      { q: 'Hardware cache storing recent virtual-to-physical address mappings.', a: 'TLB (Translation Lookaside Buffer)' },
      { q: 'The placement algorithm selecting the smallest hole still large enough.', a: 'Best-Fit' },
      { q: 'A flag indicating a page was modified and must be written to disk before eviction.', a: 'Dirty Bit' },
      { q: 'The set of pages actively used by a process within time window Δ.', a: 'Working Set' },
      { q: 'Adding more frames can increase page faults — phenomenon specific to FIFO.', a: "Belady's Anomaly" }
    ],
    essay: [
      { q: 'Explain the Working Set Model and how it prevents thrashing. Include the working set window (Δ) and WSS.', a: 'The Working Set Model, developed by Peter Denning, prevents thrashing by tracking the set of unique pages a process has referenced within a fixed time window Δ (e.g., the last 1,000 memory accesses); the size of this set is called the Working Set Size (WSS), and the OS allocates exactly that many frames to the process so all actively used pages remain in memory, eliminating constant page faults. If the sum of all processes\' WSSes exceeds total physical RAM, the OS uses the medium-term scheduler to swap out one or more processes entirely, freeing enough frames for the remaining processes to run efficiently without thrashing.' },
      { q: 'Compare First-Fit, Best-Fit, and Worst-Fit placement algorithms. Which produces the most external fragmentation and why?', a: 'First-Fit scans memory from the start and uses the first hole large enough, which is fast but leaves a random-sized leftover fragment that may or may not be useful. Best-Fit searches all holes and picks the smallest sufficient one, minimizing each leftover, but it often produces tiny fragments too small to ever reuse, meaning it ironically generates the most problematic external fragmentation by filling memory with small unusable slivers over time. Worst-Fit picks the largest available hole, leaving the biggest possible leftover fragment, so while it sounds wasteful, that large leftover can often still satisfy future requests, making it sometimes more practical than Best-Fit despite its counterintuitive name.' },
      { q: 'Describe demand paging vs. prepaging. What principle of memory access makes prepaging effective?', a: 'Demand paging is a reactive fetch strategy that loads a page into RAM only when the process actually accesses it and triggers a page fault, making it memory-efficient because only genuinely needed pages ever enter RAM, but it results in frequent faults especially at program startup. Prepaging is a predictive strategy that loads multiple pages into memory before they are referenced, reducing the number of page faults the process will encounter during execution. Prepaging is effective because of the principle of spatial locality — programs tend to access memory locations near recently used addresses such as sequential array elements, so loading adjacent pages just before an actual fault is statistically almost always correct and avoids the overhead of repeated fault handling.' }
    ],
    ps: [
      { q: 'Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames. How many FIFO page faults?', a: '15 page faults', steps: ['7→[7] FAULT(1)', '0→[7,0] FAULT(2)', '1→[7,0,1] FAULT(3)', '2→[0,1,2] FAULT evict 7(4)', '0→HIT', '3→[1,2,3] FAULT evict 0(5)', '0→[2,3,0] FAULT evict 1(6)', '4→[3,0,4] FAULT evict 2(7)', '2→[0,4,2] FAULT evict 3(8)', '3→[4,2,3] FAULT evict 0(9)', '0→[2,3,0] FAULT evict 4(10)', '3→HIT, 2→HIT', '1→[3,0,1] FAULT evict 2(11)', '2→[0,1,2] FAULT evict 3(12)', '0→HIT, 1→HIT', '7→[1,2,7] FAULT evict 0(13)', '0→[2,7,0] FAULT evict 1(14)', '1→[7,0,1] FAULT evict 2(15)', 'TOTAL: 15 page faults'] },
      { q: 'Holes: 10,4,20,18,7,9,12,15 MB. Process needs 16 MB. Which hole for (a) First-Fit (b) Best-Fit (c) Worst-Fit?', a: '(a) First-Fit: 20 MB  (b) Best-Fit: 18 MB  (c) Worst-Fit: 20 MB', steps: ['Eligible holes (≥16 MB): 20 MB, 18 MB', 'First-Fit: scan → 10(no), 4(no), 20(yes) → SELECT 20 MB, leftover 4 MB', 'Best-Fit: smallest eligible → 18 MB → SELECT 18 MB, leftover 2 MB', 'Worst-Fit: largest overall → 20 MB → SELECT 20 MB, leftover 4 MB'] }
    ]
  }
},
// ─────────────────────────────────────────
// 3. FILE & DISK MANAGEMENT
// ─────────────────────────────────────────
{
  id: 'filesystem', name: 'File & Disk Management', color: '#f59e0b', icon: '💾',
  terms: [
    { term: 'File System',          def: 'An OS component managing how data is stored, organized, and retrieved from storage devices, providing logical abstraction over physical storage.' },
    { term: 'Sequential Access',    def: 'Data read or written in order from the beginning, one record at a time — like reading a tape.' },
    { term: 'Direct Access',        def: 'Any block can be accessed directly by specifying its address, without processing preceding records.' },
    { term: 'Indexed Access',       def: 'Uses an index structure to locate data blocks, combining the benefits of sequential and direct access.' },
    { term: 'Contiguous Allocation',def: 'All file blocks stored consecutively on disk. Fast sequential access but causes external fragmentation.' },
    { term: 'Linked Allocation',    def: 'Each block contains a pointer to the next. No external fragmentation and easy to grow, but poor random access.' },
    { term: 'Indexed Allocation',   def: 'An index block holds all data block pointers. Supports efficient random access without external fragmentation.' },
    { term: 'DAC',                  def: 'Discretionary Access Control — resource owner decides who gets access via permission bits, ownership, groups, and ACLs.' },
    { term: 'MAC',                  def: 'Mandatory Access Control — system enforces access based on security labels/clearances, overriding owner decisions.' },
    { term: 'RBAC',                 def: 'Role-Based Access Control — permissions assigned to roles; users assigned to roles. Simplifies large-organization administration.' },
    { term: 'Journaling',           def: 'File system changes logged to a journal before committing, enabling crash recovery by replay or rollback.' },
    { term: 'ACL',                  def: 'Access Control List — specifies which users or groups have which permissions (read, write, execute) for a file.' },
    { term: 'Magnetic Disk',        def: 'Non-volatile storage device storing data magnetically on rotating platters at thousands of RPM.' },
    { term: 'Platter',              def: 'Thin circular disk coated with magnetic material inside a drive; data stored on both top and bottom surfaces.' },
    { term: 'Track',                def: 'A concentric circle of sectors on a platter surface. Each surface contains many concentric tracks.' },
    { term: 'Sector',               def: 'The smallest physical storage unit on a disk, typically 512 bytes.' },
    { term: 'Seek Time',            def: 'Time to move the read/write head to the correct track — usually the dominant component of disk access time.' },
    { term: 'Rotational Latency',   def: 'Time for the desired sector to rotate under the read/write head after reaching the correct track.' },
    { term: 'Transfer Time',        def: 'Time to physically move data between the disk and the system buffer once the head is positioned.' },
    { term: 'Disk Scheduling',      def: 'Algorithms ordering I/O requests to minimize total seek time and rotational latency, improving throughput.' },
    { term: 'FCFS',                 def: 'First-Come-First-Served disk scheduling — services requests in arrival order. Simple and fair but may cause high total seek time.' },
    { term: 'SSTF',                 def: 'Shortest Seek Time First — services the closest request to the current head. Minimizes individual seek but risks starvation.' },
    { term: 'SCAN Algorithm',       def: 'Elevator — head moves in one direction servicing all requests, then reverses at the end. Prevents starvation.' },
    { term: 'C-SCAN',               def: 'Circular SCAN — services only on the outward pass, jumps back without servicing. Provides more uniform wait times.' },
    { term: 'Track Skewing',        def: 'Offsetting start sectors of adjacent tracks to account for head movement time, improving sequential read performance.' },
    { term: 'Track Buffering',      def: 'Pre-reading unrequested sectors into a buffer for instant access if later requested by the OS.' },
    { term: 'Write Acceleration',   def: 'Acknowledging write completion once data hits the disk buffer (before physical write). Faster but risks data loss on power failure.' },
    { term: 'Sector Sparing',       def: 'Remapping data from damaged sectors to healthy spare locations, maintaining disk integrity.' },
    { term: 'Inode',                def: 'Unix data structure storing file metadata (permissions, size, timestamps) and pointers to data blocks.' },
    { term: 'Bitmap',               def: 'Free space management using one bit per disk block: 1 = free, 0 = occupied.' },
    { term: 'FAT',                  def: 'File Allocation Table — FAT32 structure tracking the chain of blocks per file via linked table entries.' },
    { term: 'Metadata',             def: 'Data describing a file: size, type, owner, timestamps, permissions, and block locations on disk.' }
  ],
  outline: [
    { title: 'File Systems (Pagaran)', desc: 'Fundamental OS component managing how data is stored, organized, and retrieved', items: ['Requirements: Organization, Access, Space Management, Reliability, Security, Scalability', 'Data Storage: Files (bytes/records/trees), Directories (hierarchy), Metadata (size, timestamps, permissions, block locations)', 'File Access: Sequential (in-order), Direct (by address), Indexed (via index structure)', 'Space Management: free space tracking, allocation strategies', 'Performance: Buffering, Caching, Read-ahead for efficiency', 'Reliability: Journaling, Checkpointing, Backup, fsck (filesystem check)', 'Security: ACLs, permissions, encryption', 'Compatibility: FAT32, NTFS'] },
    { title: 'File System Protection and Reliability (Legaspo)', desc: '', items: ['Protection vs. Reliability: protection = access control; reliability = crash recovery and data integrity', 'Access Control Model elements: Subject, Object, Operation, Policy, Enforcement', 'DAC (Discretionary Access Control) — owner decides access via permission bits, groups, ACLs', 'MAC (Mandatory Access Control) — system enforces security labels/clearances; overrides owner', 'RBAC (Role-Based Access Control) — permissions to roles; users assigned to roles', 'ABAC (Attribute-Based Access Control) — permissions based on attributes of user, resource, environment', 'RuBAC (Rule-Based Access Control) — rules define conditions for access', 'Security Principles: Least privilege, Complete mediation, Fail-safe defaults, Separation of duties, Defense in depth', 'Crash Consistency: ensuring file system is in a valid state after a crash', 'Journaling and Atomic Updates — log operations before committing; replay or rollback on crash', 'Safe File Replacement — write to temp, then rename atomically', 'Copy-on-Write — write new version to new block; update pointer atomically', 'Checksums — detect silent data corruption', 'Redundancy and Backups: RAID 0 (striping, no redundancy), RAID 1 (mirroring), RAID 5 (striping + parity), RAID 10 (mirror + stripe)'] },
    { title: 'File Allocation Methods (Guarin)', desc: '', items: ['Contiguous Allocation — all blocks stored consecutively; start+length; fast sequential and direct access; causes external fragmentation', 'Linked Allocation — each block has pointer to next (chained); no external fragmentation; poor random access; evolved into FAT', 'FAT (File Allocation Table) — linked allocation in a separate table; Microsoft\'s historical implementation', 'Indexed Allocation — a single index block holds all data block pointers; supports fast random access; no external fragmentation', 'Indexing Schemes for Large Files:', '  Linked Scheme — index blocks chained together for larger files', '  Multilevel Index — index block points to other index blocks (2-level, 3-level)', '  Combined / Inode — Unix inode with direct pointers, single indirect, double indirect, triple indirect blocks'] },
    { title: 'File Access Methods & Disk Organization (Solis)', desc: '', items: ['File Access Methods: Sequential (read in order), Direct/Random (access any block by address), Indexed (search index then access)', 'Magnetic Disk Components:', '  Platters — thin circular disks with magnetic coating; data on both surfaces', '  Surfaces — top and bottom of each platter', '  Spindle / Motor — rotates all platters simultaneously at thousands of RPM', '  Disk Heads — read/write components, one per surface', '  Arm Assembly — moves all heads in unison radially', 'Sectors and Tracks: sector = smallest unit (~512 bytes); track = concentric circle of sectors', 'Disk Access Operations (in order): Seek (move arm to track) → Head Activation → Rotation (wait for sector) → Data Transfer', 'Total Access Time = Seek Time + Rotational Latency + Transfer Time (seek dominates)', 'Disk Optimizations:', '  Track Skewing — offset sector start on adjacent tracks to reduce inter-track seek penalty', '  Track Buffering — pre-read unneeded sectors into buffer for instant access', '  Write Acceleration — acknowledge write when data hits buffer (faster; risks loss on power failure)', '  Sector Sparing — remap data from damaged sectors to spare locations'] },
    { title: 'Disk Scheduling Algorithms (Solis)', desc: 'Ordering I/O requests to minimize total seek time and latency', items: ['FCFS (First-Come-First-Served) — service in arrival order; simple and fair; can cause high total head movement', 'SSTF (Shortest Seek Time First) — service closest request first; minimizes individual seek; risks starvation of distant requests', 'SCAN / Elevator — head sweeps one direction servicing all requests, then reverses; prevents starvation', 'C-SCAN (Circular SCAN) — service only on outward pass; jump back to start without servicing; most uniform wait times'] }
  ],
  steps: [
    { title: 'Disk Access Time Components', steps: ['Step 1 — SEEK: Move arm to correct track (Seek Time — largest component)', 'Step 2 — HEAD ACTIVATION: Activate specific read/write head (minimal delay)', 'Step 3 — ROTATION: Wait for desired sector to rotate under head (Rotational Latency ≈ half-rotation on average)', 'Step 4 — DATA TRANSFER: Move data between disk and system buffer (Transfer Time)', 'Total Access Time = Seek Time + Rotational Latency + Transfer Time'] },
    { title: 'FCFS Disk Scheduling Calculator', isCalc: true, calcType: 'disk' }
  ],
  exams: {
    tf: [
      { q: 'Contiguous file allocation supports efficient sequential access.', a: true, exp: 'Contiguous allocation places all blocks adjacent, enabling fast sequential reads without pointer chasing.' },
      { q: 'Linked file allocation supports efficient random access.', a: false, exp: 'Linked allocation requires traversing the chain from the start, making random access O(n) — very slow.' },
      { q: 'Track Buffering risks data loss during power failure.', a: false, exp: 'WRITE ACCELERATION risks data loss. Track Buffering only pre-reads sectors into the buffer.' },
      { q: 'SSTF disk scheduling can cause starvation for distant requests.', a: true, exp: 'SSTF always picks the nearest request, potentially ignoring far-away requests indefinitely.' },
      { q: 'Journaling helps a file system recover from crashes by replaying logged operations.', a: true, exp: 'Journaling logs operations before committing, allowing replay or rollback after a crash.' },
      { q: 'The sector is the largest physical unit of storage on a magnetic disk.', a: false, exp: 'The sector is the SMALLEST unit (typically 512 bytes). Tracks and platters are larger.' },
      { q: 'DAC allows the system to override owner-defined access based on security labels.', a: false, exp: 'That describes MAC. In DAC, the owner controls who gets access.' },
      { q: 'C-SCAN services requests in both directions of disk head travel.', a: false, exp: 'C-SCAN only services requests on the outward pass, then jumps back without servicing.' }
    ],
    id: [
      { q: 'The file allocation method storing all blocks consecutively on disk.', a: 'Contiguous Allocation' },
      { q: 'The disk scheduling algorithm servicing requests in arrival order.', a: 'FCFS (First-Come-First-Served)' },
      { q: 'The time for the disk head to move to the correct track.', a: 'Seek Time' },
      { q: 'A recovery technique logging file system changes before committing them.', a: 'Journaling' },
      { q: 'Access control model assigning permissions to roles rather than directly to users.', a: 'RBAC (Role-Based Access Control)' },
      { q: 'Disk optimization pre-reading unrequested sectors into a buffer.', a: 'Track Buffering' },
      { q: 'Data describing a file: size, timestamps, owner, permissions, block locations.', a: 'Metadata' },
      { q: 'The smallest physical storage unit on a magnetic disk.', a: 'Sector' }
    ],
    essay: [
      { q: 'Compare the three file allocation methods (contiguous, linked, indexed) in terms of access speed, space efficiency, and fragmentation.', a: 'Contiguous allocation stores all file blocks in consecutive disk locations, enabling very fast sequential access and simple direct access by computing the offset, but it suffers from external fragmentation over time because holes left by deleted files may not fit new larger files, and growing a file often requires complete relocation. Linked allocation chains blocks together with pointers, eliminating external fragmentation and making file growth easy since any free block can be appended to the chain, but random access is slow because the OS must traverse all preceding blocks, and pointer overhead consumes usable space per block. Indexed allocation uses a dedicated index block containing all data block pointers, supporting efficient random access without fragmentation or chain traversal, but it wastes an entire index block for small files and requires multi-level indexing for very large files, adding complexity to the implementation.' },
      { q: 'Explain how FCFS, SSTF, SCAN, and C-SCAN disk scheduling differ in performance and fairness.', a: 'FCFS services requests in arrival order, which is perfectly fair but can result in extreme head movement and high total seek time when requests are scattered across the disk, making it impractical for high-load systems. SSTF selects whichever request is closest to the current head position, greatly reducing movement and average seek time, but inner-track requests can starve outer ones indefinitely if new inner requests keep arriving before the head moves far. SCAN moves the head in one direction servicing all requests it passes until it reaches the end, then reverses like an elevator, providing a compromise that prevents starvation, though requests at the far end of the disk wait the longest. C-SCAN improves fairness by only servicing requests on the outward pass and jumping back to the beginning without servicing, giving all requests a more uniform maximum wait time and avoiding the uneven service distribution SCAN causes at disk boundaries.' },
      { q: 'Describe file system protection mechanisms. What is the difference between DAC, MAC, and RBAC?', a: 'File system protection relies on access control to enforce who can perform which operations on which files, using a model built on subjects (users or processes), objects (files and directories), operations (read, write, execute), and enforcement mechanisms in the OS kernel. DAC (Discretionary Access Control) lets the resource owner decide who gets access through permission bits and ACLs, making it flexible but only as secure as each owner\'s judgment. MAC (Mandatory Access Control) has the system enforce access based on security labels and clearances that neither owners nor users can override, making it ideal for high-security environments like military systems. RBAC (Role-Based Access Control) assigns permissions to roles such as admin or developer and then assigns users to those roles, simplifying administration in large organizations because changing a role\'s permissions automatically applies to every user holding that role.' }
    ],
    ps: [
      { q: 'Disk requests: 98,183,37,122,14,124,65,67. Head starts at 53. Calculate total FCFS head movement.', a: 'Total: 640 cylinders', steps: ['53→98: |98-53|=45', '98→183: |183-98|=85', '183→37: |37-183|=146', '37→122: |122-37|=85', '122→14: |14-122|=108', '14→124: |124-14|=110', '124→65: |65-124|=59', '65→67: |67-65|=2', 'Total = 45+85+146+85+108+110+59+2 = 640 cylinders'] }
    ]
  }
},
// ─────────────────────────────────────────
// 4. EMBEDDED SYSTEMS
// ─────────────────────────────────────────
{
  id: 'embedded', name: 'Embedded Systems', color: '#ef4444', icon: '🔧',
  terms: [
    { term: 'Embedded System',             def: 'A specialized computer designed for a specific function within a larger device, with timing constraints and limited resources. Not general-purpose.' },
    { term: 'Hard Real-Time',              def: 'Missing a deadline IS the failure — potentially causing physical harm. Example: ABS braking must respond in ≤20ms or wheels lock.' },
    { term: 'Soft Real-Time',              def: 'Missing a deadline degrades quality but does not cause failure. Example: a late video frame causes a stutter, not a catastrophe.' },
    { term: 'Bare-Metal Programming',      def: 'Programming directly on hardware with no OS — a single infinite sense→compute→act loop. Zero overhead but cannot handle multiple tasks.' },
    { term: 'RTOS',                        def: 'Real-Time Operating System — a small OS (~6–10 KB) managing multiple tasks with fixed priorities and bounded, predictable execution times.' },
    { term: 'FreeRTOS',                    def: 'Popular open-source RTOS, ~6–10 KB kernel, used in microcontrollers. Handles timers, semaphores, and preemptive task scheduling.' },
    { term: 'Priority Inversion',          def: 'A low-priority task holds a resource needed by a high-priority task, blocking it. Caused the Mars Pathfinder (1997) near-failure.' },
    { term: 'Rate Monotonic Scheduling',   def: 'Fixed-priority scheduling: shorter period = higher priority. Provably optimal for fixed-priority real-time systems.' },
    { term: 'Earliest Deadline First',     def: 'Dynamic scheduling: the task with the nearest deadline runs next. Optimal — achieves up to 100% CPU utilization.' },
    { term: 'Static Memory Allocation',    def: 'All memory declared at compile time; no malloc() at runtime. Zero allocation time variability.' },
    { term: 'Memory Pool',                 def: 'Pre-allocated fixed-size blocks enabling O(1) allocation time. Eliminates heap fragmentation entirely.' },
    { term: 'Fixed Task Stack',            def: 'Each RTOS task gets a defined, fixed stack. Stack overflow is detectable at design time, not during a critical operation.' },
    { term: 'Interrupt-Driven I/O',        def: 'CPU sleeps until a hardware interrupt signals a device needs attention. Provides bounded response and enables deep sleep modes.' },
    { term: 'Polling I/O',                 def: 'CPU continuously checks whether a device is ready — wasting CPU cycles and power. Rarely acceptable in embedded systems.' },
    { term: 'ISR',                         def: 'Interrupt Service Routine — a short function executing immediately when a hardware interrupt fires, completing in microseconds.' },
    { term: 'Resource-Constrained',        def: 'Characteristic of embedded systems: CPU in MHz (not GHz), RAM in KB to low MB, power from batteries lasting months or years.' },
    { term: 'IoT',                         def: 'Internet of Things — billions of networked embedded devices using lightweight protocols: MQTT (2KB overhead), CoAP, Zigbee.' },
    { term: 'Edge Computing',              def: 'Moving computation from the cloud to the local device, reducing latency, improving privacy, and enabling offline real-time operation.' },
    { term: 'TinyML',                      def: 'Neural network inference on microcontrollers (256 KB RAM) for keyword detection, anomaly detection. Libraries: TensorFlow Lite Micro, Edge Impulse.' },
    { term: 'AUTOSAR',                     def: 'Standardized automotive embedded software architecture. Fixed-priority preemptive scheduling, certified to ISO 26262 safety standard.' },
    { term: 'Mirai Botnet',                def: '2016 attack infecting ~600,000 IoT devices via default credentials. Exploited: no MMU, no firmware updates, no user/kernel separation.' },
    { term: 'Context Switch (RTOS)',       def: 'Bounded microsecond operation saving one task\'s registers and restoring another\'s, enabling preemptive multitasking.' },
    { term: 'Embedded Linux',              def: 'Full OS (~50MB) for more capable embedded hardware. Provides TLS, OTA updates, and networking but is less deterministic than an RTOS.' }
  ],
  outline: [
    { title: 'Introduction: The 20-Millisecond Hook', desc: 'The computers you were never taught about', items: ['ABS (Anti-lock Braking System) — must respond in ≤20ms or wheels lock', 'Pacemaker — pulse timing equals a heartbeat', 'Traffic Light Controller — coordinating intersections in real time', 'Autopilot — fly-by-wire systems in aircraft', 'Smart Thermostat — sensing, deciding, and actuating continuously', 'Factory Sensors / Industrial PLCs — controlling manufacturing processes'] },
    { title: 'What Is an Embedded System', desc: 'A computing system built into a larger device, designed for a specific function, with timing constraints and limited resources', items: ['General-Purpose Computer: wide variety of tasks, user-configurable, tolerates failure (reboot)', 'Embedded System: single dedicated function, not user-reconfigurable, cannot tolerate failure', 'Four Constraints:', '  Real-Time — must meet timing deadlines (not just "fast")', '  Resource-Constrained — CPU in MHz, RAM in KB, storage in KB–MB', '  Power-Sensitive — batteries lasting months or years; deep sleep modes', '  High Reliability — cannot be rebooted or manually recovered mid-operation'] },
    { title: 'Hard Real-Time vs. Soft Real-Time', desc: '', items: ['Hard Real-Time — missing the deadline IS the failure; potentially causing physical harm', '  Examples: ABS (≤20ms), pacemaker pulse timing, Therac-25 (1987 scheduling bug → 3 deaths)', 'Soft Real-Time — missing the deadline degrades quality but does not cause failure', '  Examples: late video frame = stutter, audio buffer underrun = pop, late game update = lag', 'Critical distinction: correctness defined by both output AND timing in hard real-time'] },
    { title: 'OS Spectrum for Embedded Systems', desc: '', items: ['Bare-Metal (no OS) — single infinite sense→compute→act loop; zero overhead; cannot handle multiple tasks', 'RTOS — small kernel (~6–10 KB); fixed priorities; bounded, predictable context switch (microseconds)', '  Examples: FreeRTOS, VxWorks, Zephyr', 'Embedded Linux — full OS (~50 MB); paging, filesystem, networking, TLS, OTA updates; less deterministic', '  Example: Raspberry Pi running Linux', 'Desktop OS goal: fairness and throughput | Embedded OS goal: guarantee every deadline is met'] },
    { title: 'Bare-Metal vs. RTOS (comparison)', desc: '', items: ['Bare-Metal: one loop, one task at a time; timing done with delays; scales poorly', 'RTOS: multiple tasks, each with priority; preemptive scheduler; timers and semaphores built-in', 'Desktop OS vs. Embedded OS: desktop prioritizes fairness; embedded prioritizes predictability and deadlines'] },
    { title: 'Real-Time Scheduling', desc: '', items: ['Rate Monotonic Scheduling (RMS) — fixed-priority; shorter period = higher priority; provably optimal for fixed-priority systems', 'Earliest Deadline First (EDF) — dynamic priority; task with nearest deadline runs next; achieves up to 100% CPU utilization', 'Priority Inversion — low-priority task holds resource needed by high-priority task; blocks it', '  Mars Pathfinder (1997) — priority inversion in VxWorks caused watchdog resets; fixed by enabling priority inheritance'] },
    { title: 'Memory in Embedded Systems', desc: 'No virtual memory — page faults have unpredictable resolution times', items: ['Why no virtual memory: page fault resolution time is unbounded; many microcontrollers have NO MMU hardware', 'Static Memory Allocation — all memory declared at compile time; zero allocation time variability', 'Memory Pools — pre-allocated fixed-size blocks; O(1) allocation time; eliminates heap fragmentation', 'Fixed Task Stacks — each RTOS task gets a defined, fixed stack; overflow detectable at design time'] },
    { title: 'I/O: Interrupts Are the Architecture', desc: '', items: ['Polling I/O — CPU continuously checks if device is ready; wastes CPU cycles and power', 'Interrupt-Driven I/O — CPU sleeps; hardware interrupt fires when device needs attention; bounded response guarantee', 'Comparison: CPU while waiting (Polling=busy, Interrupt=sleeping), Response guarantee (Polling=no, Interrupt=yes), Power consumption (Polling=high, Interrupt=low), Scalability (Polling=poor, Interrupt=good)'] },
    { title: 'Case Study: The 20-Millisecond Window (ABS)', desc: '', items: ['System: AUTOSAR RTOS (standardized automotive embedded software architecture)', 'Memory: static allocation — no malloc(), no virtual memory', 'Scheduling: fixed-priority preemptive; ISO 26262 safety standard certified', 'Deadline: ≤20ms from wheel speed sensor to brake actuator command', 'Key lesson: every OS design choice (memory, scheduling, I/O) directly maps to whether someone\'s brakes work'] },
    { title: 'Case Study: The Smart Device Juggler (Smart Thermostat)', desc: '', items: ['5 concurrent tasks with different deadline types:', '  Temperature Sensing (every 100ms, hard real-time)', '  Display Update (every 500ms, soft real-time)', '  User Input Handling (event-driven, soft real-time)', '  HVAC Control (deadline-triggered, hard real-time)', '  WiFi/Cloud Sync (best-effort, no hard deadline)', 'FreeRTOS vs. Embedded Linux tradeoffs for this use case'] },
    { title: 'Security: 600,000 Infected Devices — Mirai Botnet 2016', desc: '', items: ['Root cause — OS design choices missing from IoT devices:', '  No MMU → buffer overflow = full device compromise', '  No user/kernel separation → malware gets direct hardware access', '  No firmware update mechanism → vulnerability is permanent', '  Static default credentials (admin/admin) never changed by users', 'Impact: ~600,000 devices infected via Telnet scan; ~1.2 Tbps DDoS; Dyn DNS down; Twitter, Netflix, Reddit, GitHub unreachable'] },
    { title: 'What\'s Next', desc: '', items: ['IoT Scale — 30 billion devices today → 75 billion by 2030; protocols: MQTT (2KB overhead), CoAP, Zigbee', 'Edge Computing — moving computation from cloud to device; reduces latency, improves privacy, enables offline real-time', 'TinyML — neural network inference on microcontrollers (256 KB RAM); keyword detection, anomaly detection; TensorFlow Lite Micro, Edge Impulse'] },
    { title: 'What You Take From This Room', desc: '', items: ['What they are — embedded systems are specialized, resource-constrained, real-time computers inside everyday devices', 'What they run — bare-metal, RTOS, or embedded Linux depending on complexity and deadline requirements', 'The critical rule — real-time ≠ fast; real-time = predictable, bounded, guaranteed timing', 'The bigger picture — OS design choices for memory, scheduling, and I/O have direct physical and geopolitical consequences'] }
  ],
  steps: [
    { title: 'Interrupt-Driven I/O Sequence (ABS Example)', steps: ['Sensor event fires (wheel speed sensor detects imminent lock-up)', 'Hardware interrupt triggered — CPU stops current task', 'ISR (Interrupt Service Routine) executes in microseconds', 'ISR posts semaphore or message to RTOS task queue', 'High-priority brake task unblocks and is scheduled by RTOS', 'Actuator fires / brake pressure modulated within 20ms deadline'] },
    { title: 'Rate Monotonic Priority Assignment', steps: ['List all tasks with their periods (how often they repeat in ms)', 'Sort: shortest period = highest priority', 'Assign Priority 1 to shortest period task, Priority 2 to next, etc.', 'Example: A(10ms)=P1 (highest), B(50ms)=P2, C(100ms)=P3', 'When multiple tasks ready: always run highest priority task first', 'Verify schedulability: CPU utilization ≤ n(2^(1/n)−1) for n tasks'] }
  ],
  exams: {
    tf: [
      { q: 'In a hard real-time system, missing a deadline is acceptable if it happens rarely.', a: false, exp: 'In hard real-time, missing a deadline IS the failure — it has physical consequences every time.' },
      { q: 'FreeRTOS has a kernel size of approximately 6–10 KB.', a: true, exp: 'FreeRTOS is designed for microcontrollers and has a ~6–10 KB kernel footprint.' },
      { q: 'Polling I/O is preferred over interrupt-driven I/O in embedded systems.', a: false, exp: 'Polling wastes CPU cycles and power. Interrupt-driven I/O is preferred for efficiency and predictability.' },
      { q: 'Rate Monotonic Scheduling assigns higher priority to tasks with longer periods.', a: false, exp: 'RMS assigns HIGHER priority to tasks with SHORTER periods (rate = 1/period).' },
      { q: 'Static memory allocation eliminates heap fragmentation in embedded systems.', a: true, exp: 'No dynamic allocation means no heap and therefore no fragmentation at all.' },
      { q: 'Virtual memory with demand paging is commonly used in hard real-time systems.', a: false, exp: 'Page faults have unpredictable resolution times, violating hard real-time deadline guarantees.' },
      { q: 'Priority inversion caused a near-mission-failure on the Mars Pathfinder.', a: true, exp: 'A VxWorks priority inversion bug caused the watchdog to repeatedly reset the system.' },
      { q: 'EDF scheduling can theoretically achieve 100% CPU utilization.', a: true, exp: 'EDF dynamically assigns priority by nearest deadline, achieving theoretically optimal utilization.' }
    ],
    id: [
      { q: 'A timing constraint where missing the deadline causes physical harm.', a: 'Hard Real-Time' },
      { q: 'The scheduling algorithm assigning higher priority to shorter-period tasks.', a: 'Rate Monotonic Scheduling (RMS)' },
      { q: 'A condition where a low-priority task blocks a high-priority task by holding a resource.', a: 'Priority Inversion' },
      { q: 'Single infinite loop programming model directly on hardware with no OS.', a: 'Bare-Metal' },
      { q: 'Pre-allocated fixed-size memory blocks with O(1) allocation time.', a: 'Memory Pool' },
      { q: 'An I/O model where the CPU waits for hardware signals rather than continuously polling.', a: 'Interrupt-Driven I/O' },
      { q: '2016 botnet infecting 600,000 devices via default credentials and no firmware updates.', a: 'Mirai Botnet' },
      { q: 'Running AI inference on microcontrollers using TensorFlow Lite Micro or Edge Impulse.', a: 'TinyML' }
    ],
    essay: [
      { q: 'Compare Hard Real-Time and Soft Real-Time systems. Give two examples of each and explain the consequences of missing a deadline.', a: 'A hard real-time system is one where missing a deadline constitutes the failure itself, carrying physical or safety consequences — for example, an ABS braking system must respond within 20ms or the wheels lock and steering is lost at speed, and a pacemaker\'s pulse timing literally equals a heartbeat, so any missed deadline can be directly life-threatening. A soft real-time system is one where deadlines are targets rather than absolute constraints — for example, a video stream that delivers a frame late shows a momentary stutter but the system continues functioning, and an online game with a delayed state update creates annoying lag but no physical harm. The critical distinction is that in hard real-time, the system\'s correctness is defined by both its computational output and its timing simultaneously, while in soft real-time, timing affects only performance metrics like quality and user experience.' },
      { q: 'Explain why virtual memory with demand paging is NOT suitable for hard real-time embedded systems. What memory techniques are used instead?', a: 'Virtual memory with demand paging is unsuitable for hard real-time systems because a page fault triggers an I/O operation to fetch the missing page from disk, and the time to resolve that fault is completely unpredictable depending on disk latency, memory pressure, and scheduling contention, making it impossible to guarantee that any task will finish before its deadline. Additionally, many microcontrollers used in embedded systems do not even have an MMU, so virtual memory is architecturally impossible. Instead, embedded systems use static memory allocation where all memory is declared at compile time so no allocation delays occur at runtime; memory pools which pre-allocate fixed-size blocks that can be acquired in O(1) constant time without fragmentation; and fixed task stacks where each RTOS task is assigned a bounded stack so overflow can be detected and prevented at design time rather than during a safety-critical operation.' },
      { q: 'Describe the security vulnerabilities that allowed the Mirai Botnet to infect 600,000 devices. What OS design choices contributed?', a: 'The Mirai Botnet exploited a combination of design choices that prioritized cost and simplicity over security: devices shipped with static default credentials (admin/admin) that users never changed, there was no firmware update mechanism so discovered vulnerabilities could never be patched, and the absence of an MMU meant that a buffer overflow in any part of the software gave the attacker complete control of the device with no memory isolation to contain the damage. The lack of user/kernel separation meant malware could directly access hardware peripherals and network interfaces, and without any update path all 600,000 devices remained permanently compromised, demonstrating that OS design decisions about memory isolation, privilege separation, and updateability are not merely technical choices but have real geopolitical consequences as the resulting 1.2 Tbps DDoS attack took down major internet infrastructure including Twitter, Netflix, and GitHub.' }
    ],
    ps: [
      { q: 'RTOS has: Task A (period=10ms), Task B (period=50ms), Task C (period=100ms). Using RMS, assign priorities. All three are ready simultaneously — which runs first?', a: 'A=Priority 1 (highest), B=Priority 2, C=Priority 3. Task A runs first.', steps: ['RMS Rule: shorter period = higher priority', 'Task A: 10ms → PRIORITY 1 (highest)', 'Task B: 50ms → PRIORITY 2', 'Task C: 100ms → PRIORITY 3 (lowest)', 'All tasks ready simultaneously → Task A preempts all and runs first', 'Task B runs only when Task A is blocked or done', 'Task C runs only when both Task A and Task B are not ready'] }
    ]
  }
},
// ─────────────────────────────────────────
// 5. DISTRIBUTED SYSTEMS
// ─────────────────────────────────────────
{
  id: 'distributed', name: 'Distributed Systems', color: '#8b5cf6', icon: '🌐',
  terms: [
    { term: 'Distributed System',    def: 'A collection of loosely coupled processors interconnected by a network, each with its own local memory and no shared clock.' },
    { term: 'Site',                  def: 'The physical location of a machine in a distributed system.' },
    { term: 'Node',                  def: 'A specific computing system at a site.' },
    { term: 'LAN',                   def: 'Local-Area Network — covers a small geographic area using Ethernet and WiFi, enabling resource sharing with organizational autonomy.' },
    { term: 'WAN',                   def: 'Wide-Area Network — spans large geographic areas. ARPANET (1960s) was the first WAN, eventually becoming the Internet.' },
    { term: 'DNS',                   def: 'Domain Name System — distributed hierarchical system translating host names (e.g., eric.cs.yale.edu) into numeric IP addresses.' },
    { term: 'IP Address',            def: 'Numeric host identifier split into a network number and host number; routers use the network portion to route packets.' },
    { term: 'MAC Address',           def: 'A permanent 6-byte hardware address on each Ethernet device, used for local LAN communication (Layer 2).' },
    { term: 'ARP',                   def: 'Address Resolution Protocol — broadcasts to find the MAC address for a known IP address; results cached in an ARP table.' },
    { term: 'TCP',                   def: 'Transmission Control Protocol — reliable, connection-oriented protocol providing in-order byte stream delivery via ACKs, sequence numbers, and retransmission.' },
    { term: 'UDP',                   def: 'User Datagram Protocol — unreliable, connectionless protocol with minimal overhead; used when speed matters more than guaranteed delivery.' },
    { term: 'Three-Way Handshake',   def: 'TCP connection setup: SYN → SYN-ACK → ACK. Creates a reliable bidirectional connection before data transfer begins.' },
    { term: 'Flow Control',          def: 'TCP mechanism preventing a fast sender from overwhelming a slower receiver using the receiver\'s buffer capacity as a throttle signal.' },
    { term: 'Congestion Control',    def: 'TCP mechanism preventing network saturation by monitoring timeouts and reducing transmission speed when congestion is detected.' },
    { term: 'Network OS',            def: 'Users access remote resources explicitly — logging in via SSH or transferring files via FTP. Requires a paradigm shift for remote work.' },
    { term: 'Distributed OS',        def: 'Remote resources are accessed identically to local ones — the distribution is fully transparent to the user.' },
    { term: 'Data Migration',        def: 'Moving data to where the user or program needs it — either the entire file or only needed portions, similar to demand paging.' },
    { term: 'Computation Migration', def: 'Moving computation to where data resides via RPC or remote process creation, when transferring large data would be more expensive.' },
    { term: 'Process Migration',     def: 'Moving an entire process to another site for load balancing, speedup, hardware preference, or data proximity.' },
    { term: 'Robustness',            def: 'The system continues operating after partial failures (link failures, host crashes, lost messages) — possibly in degraded form.' },
    { term: 'Transparency',          def: 'Users perceive the distributed system as a single centralized entity without knowing where resources are physically located.' },
    { term: 'Scalability',           def: 'The system adapts to increased load while degrading more gradually and reaching saturation later than a non-scalable system.' },
    { term: 'DFS',                   def: 'Distributed File System — multiple machines share files over a network, appearing unified to the user despite physically distributed storage.' },
    { term: 'NFS',                   def: 'Network File System — client-server DFS with a stateless server and idempotent operations, favoring simple crash recovery.' },
    { term: 'GFS',                   def: 'Google File System — cluster-based DFS: clients contact a metadata server, then access chunked data on data servers with replication.' },
    { term: 'HDFS',                  def: 'Hadoop Distributed File System — cluster-based DFS similar to GFS, designed for large-scale processing with append-only semantics.' },
    { term: 'Location Transparency', def: 'File name does not reveal its physical storage location (static mapping).' },
    { term: 'Location Independence', def: 'File name does not change even when its physical storage location moves (dynamic mapping). Stronger than transparency.' },
    { term: 'RPC',                   def: 'Remote Procedure Call — mechanism invoking a predefined procedure on a remote site and waiting for the result.' },
    { term: 'OSI Model',             def: 'Theoretical 7-layer framework (Physical→Data Link→Network→Transport→Session→Presentation→Application) for understanding network communication.' },
    { term: 'TCP/IP Model',          def: 'Practical Internet protocol stack combining OSI layers into fewer. Does not define link/physical layers — runs on any hardware.' },
    { term: 'Cache Consistency',     def: 'Ensuring cached DFS file copies remain synchronized with the master server copy.' },
    { term: 'Well-Known Ports',      def: 'Standard port numbers: FTP=21, SSH=22, SMTP=25, HTTP=80, HTTPS=443.' }
  ],
  outline: [
    { title: 'What Are Distributed Systems', desc: 'A collection of loosely coupled nodes interconnected by a network, each with its own local memory and no shared clock', items: ['Site = the physical location of a machine', 'Node = a specific computing system at a site', 'No shared memory — communication only via network messages', 'No shared clock — coordination requires explicit protocols', 'Configurations: client-server, peer-to-peer, hybrid', 'Reasons for building: Resource Sharing, Computation Speedup, Reliability'] },
    { title: 'Applications of Distributed Systems', desc: '', items: ['Transparent file access across machines (as if local)', 'Cloud storage (files physically distributed, appear unified)', 'Business analysis across distributed databases', 'Parallel processing of large datasets'] },
    { title: 'Network Structure', desc: '', items: ['LAN (Local-Area Network) — small geographic area; Ethernet/WiFi; connected via routers; organizational autonomy', 'WAN (Wide-Area Network) — large geographic area; emerged 1960s; ARPANET → Internet', 'LAN to WAN path: ISP local exchange → data aggregation → edge router → global internet'] },
    { title: 'Communication Structure', desc: '', items: ['Naming — each host identified by <host name, identifier> pair', 'Host Name Resolution: old method = hosts file; modern = DNS', 'DNS (Domain Name System) — hierarchical, distributed; each domain manages its own subtree', 'OSI Protocol Stack — 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application', 'OSI vs. TCP/IP: OSI is 7-layer theoretical model; TCP/IP is practical fewer-layer internet stack', 'Network Identification: Host Names, IP Addressing, Routing Tables / BGP', 'Local LAN Delivery / ARP: MAC Addresses (6-byte hardware address), ARP Broadcast, Targeted Reply, ARP Caching', 'Ethernet Packet — source MAC, destination MAC, type, data, CRC', 'Transport Layer & Port Numbers: FTP=21, SSH=22, SMTP=25, HTTP=80, HTTPS=443', 'UDP — unreliable, connectionless, minimal overhead; used for DNS, streaming, gaming', 'TCP — reliable, connection-oriented; ACKs, sequence numbers, three-way handshake (SYN→SYN-ACK→ACK)', 'Flow Control — receiver signals available buffer space to throttle sender', 'Congestion Control — detect network saturation via timeouts; reduce transmission rate'] },
    { title: 'Network OS vs. Distributed OS', desc: '', items: ['Network OS — users explicitly manage remote access (SSH login, FTP transfer); user changes commands for remote resources', '  Examples: SSH, FTP, Dropbox, Google Drive', 'Distributed OS — remote resources accessed identically to local resources; distribution is fully transparent', '  Goal: appear as a single monolithic processor to all users'] },
    { title: 'Migration Models', desc: '', items: ['Data Migration — transfer entire file vs. transfer only needed portions (like demand paging)', 'Computation Migration — move computation to where data resides via RPC (Method 1) or remote process creation (Method 2)', 'Computation vs. Data Migration — move data when small; move computation when data is large', 'Process Migration — move entire process to another site for:', '  Load Balancing, Computation Speedup, Hardware Preference, Software Preference, Data Access proximity'] },
    { title: 'Design Issues', desc: '', items: ['Robustness — continues operating after partial failures (link failures, host crashes, lost messages)', '  Fault tolerance = continues in degraded form', '  Mechanisms: timeouts for failure detection, automatic reconfiguration, transaction log recovery', 'Transparency — system appears centralized; interface hides local/remote distinction; user mobility', '  LDAP example: log in from any site, get same environment', 'Scalability — adapts to increased load; distributes control and data to avoid bottlenecks', '  Techniques: compression, deduplication, decentralized control'] },
    { title: 'Distributed File Systems', desc: 'Multiple machines share files; clients request, servers manage; DFS should feel unified', items: ['Client-Server DFS (NFS v3) — stateless server, idempotent operations; simple crash recovery', '  OpenAFS — caches entire files; sends updates on close (write-on-close)', '  Weakness: single point of failure and bottleneck', 'Cluster-Based DFS (GFS, HDFS) — metadata server + data servers; files split into chunks, replicated; parallel reads/writes', '  HDFS: append-only semantics for simplified consistency', 'DFS Model Comparison: Client-Server (simple, single SPOF) vs. Cluster-Based (scalable, fault-tolerant, complex)'] },
    { title: 'DFS Naming and Transparency', desc: '', items: ['Naming = mapping logical name to physical location', 'Location Transparency — name does not reveal location (static mapping)', 'Location Independence — name does not change when location moves (dynamic mapping; stronger than transparency)', 'Mobility and System Balancing: Load Balancing, Self-Tuning, Flexible Sharing', 'Supporting Diskless Clients — boot protocol stored in ROM', 'Three Naming Approaches: Host+Local name, Remote Mount / NFS, Global Name / OpenAFS', 'Low-Level Identifiers — component units with two-part structured names'] },
    { title: 'Remote File Access', desc: '', items: ['Remote Service (RPC) — requests delivered to server; always consistent; high network load', 'Caching — data brought to client; low network load; introduces cache-consistency problem', 'Cache Location and Granularity:', '  Disk Cache — reliable, survives crashes', '  Main Memory Cache — fast, enables diskless clients', '  Block granularity: 4–8 KB (NFS) vs. large chunks 64 KB (OpenAFS)', 'Update Policy Trade-offs:', '  Write-Through — write to server immediately; reliable but slow', '  Delayed-Write — batch writes; better performance; risk of loss', '  Write-on-Close — flush on file close; efficient for session usage', 'Consistency:', '  Client-Initiated — client checks freshness with server on each access', '  Server-Initiated — server tracks which clients cache what; invalidates on update', '  HDFS: append-only → simpler consistency | GFS: random writes → complex consistency', 'Future of DFS: Lustre, GPFS; scalability challenges across WANs'] }
  ],
  steps: [
    { title: 'DNS Name Resolution (eric.cs.yale.edu)', steps: ['Process on System A requests resolution of "eric.cs.yale.edu"', 'System A queries the "edu" top-level domain name server', 'edu server returns the address of the "yale.edu" name server', 'System A queries yale.edu name server for "cs.yale.edu"', 'Address for the cs subdomain name server is returned', 'System A queries that address for host "eric"', 'Final Internet address (host-id) for "eric" is returned — connection proceeds'] },
    { title: 'TCP Three-Way Handshake', steps: ['SYN: Client sends SYN with initial sequence number X', 'SYN-ACK: Server responds acknowledging X+1 and sending its own sequence number Y', 'ACK: Client acknowledges Y+1 — connection is now ESTABLISHED', 'Data transfer begins; every segment must be ACKed or retransmitted on timeout', 'Teardown: FIN → FIN-ACK → ACK (graceful connection close)'] }
  ],
  exams: {
    tf: [
      { q: 'In a distributed system, all processors share a common memory and clock.', a: false, exp: 'Distributed systems have nodes with their own local memory and NO shared clock.' },
      { q: 'UDP provides reliable, ordered delivery of data.', a: false, exp: 'UDP is unreliable and connectionless. TCP provides reliable, ordered delivery.' },
      { q: 'Location independence is a stronger property than location transparency.', a: true, exp: "Location independence means the name doesn't change even when the file moves; transparency only hides the current location." },
      { q: 'The TCP three-way handshake is: SYN → SYN-ACK → ACK.', a: true, exp: 'This is the standard TCP connection establishment sequence.' },
      { q: 'A Distributed OS shows different interfaces for local and remote resources.', a: false, exp: 'A Distributed OS makes remote resources accessible identically to local resources.' },
      { q: 'HDFS simplifies consistency by restricting writers to append-only operations.', a: true, exp: "HDFS append-only semantics simplify the consistency model compared to GFS's random writes." },
      { q: 'NFS uses a stateful server for better crash recovery.', a: false, exp: 'NFS favors a STATELESS server with idempotent operations, making crash recovery simpler.' },
      { q: 'Process migration can be used for load balancing across nodes.', a: true, exp: 'Load balancing is one of the primary reasons for process migration in distributed systems.' }
    ],
    id: [
      { q: 'The transport protocol providing reliable, ordered, connection-oriented byte-stream delivery.', a: 'TCP (Transmission Control Protocol)' },
      { q: 'The property where a distributed system appears as a single centralized system to users.', a: 'Transparency' },
      { q: 'Moving computation to where data resides instead of transferring large datasets.', a: 'Computation Migration' },
      { q: 'Cluster-based DFS separating metadata servers from data servers, used by Google and Hadoop.', a: 'GFS / HDFS (Cluster-Based DFS)' },
      { q: 'Protocol broadcasting to find the MAC address for a known IP address.', a: 'ARP (Address Resolution Protocol)' },
      { q: "The naming property where file names don't change even when files are physically moved.", a: 'Location Independence' },
      { q: 'TCP mechanism using receiver buffer capacity to prevent the sender from overwhelming the receiver.', a: 'Flow Control' },
      { q: 'An OS where users must explicitly log in remotely or transfer files to access remote resources.', a: 'Network Operating System' }
    ],
    essay: [
      { q: 'Compare Network Operating Systems and Distributed Operating Systems in terms of user experience and transparency.', a: 'A Network Operating System requires users to explicitly manage remote access — logging in via SSH, transferring files via FTP, or using cloud storage interfaces — which means the user is always aware they are working with a remote resource and must change their commands or mental model accordingly. A Distributed Operating System achieves transparency so that users interact with remote resources exactly as they would with local ones; this is accomplished through data migration where only needed data portions are moved on demand similar to demand paging, computation migration where computation is sent to where data resides via RPC rather than moving large datasets, and process migration where entire processes move across nodes for load balancing or hardware preference, all of which make the physical distribution completely invisible from the user\'s perspective.' },
      { q: 'Explain the three design issues in distributed systems: Robustness, Transparency, and Scalability. Give a concrete mechanism for each.', a: 'Robustness refers to the system\'s ability to continue operating even when components fail; a concrete mechanism is time-out-based failure detection combined with automatic reconfiguration such as electing a new coordinator via a distributed election algorithm and transaction logs that allow recovery of consistent state after a crash. Transparency means users perceive the system as a single centralized entity rather than a distributed one; LDAP achieves this for authentication by allowing users to log in from any site and receive the same environment, and desktop virtualization presents the same desktop session regardless of which physical machine the user connects from. Scalability is the system\'s ability to handle increased load without sudden degradation; it is achieved by distributing both control and data to avoid bottlenecks, and using storage techniques like deduplication which stores only one instance of repeated data system-wide and compression to reduce both storage demand and network transfer cost simultaneously.' },
      { q: 'Compare client-server DFS and cluster-based DFS. In what scenarios would each be preferred?', a: 'A client-server DFS such as NFS or OpenAFS uses a single server to store all files and metadata, with clients accessing it via a network protocol; this model is simple, easy to administer, and provides transparent file sharing, making it ideal for small to medium organizations where the file count and client load are manageable and a single server will not become a bottleneck. A cluster-based DFS such as GFS or HDFS separates metadata management from data storage, splitting files into chunks distributed and replicated across many data servers, allowing parallel reads and writes and providing fault tolerance through chunk replication; this model is preferred for large-scale data processing workloads such as big data analytics or machine learning training where files can reach terabytes, losing one server should not lose any data, and throughput from parallel chunk access is essential to acceptable performance.' }
    ],
    ps: [
      { q: 'A TCP sender transmits a segment. The ACK does not arrive before the timer expires. Describe step-by-step what happens.', a: 'Timeout detected → retransmit segment → congestion window reduced → rate throttled → resumes on ACK', steps: ['Sender transmits TCP segment with sequence number N', 'Timer starts counting down for that segment', 'Timer expires — no ACK received', 'Sender concludes the segment or its ACK was lost in the network', 'Sender retransmits the same segment with sequence number N', 'Congestion control interprets timeout as network congestion signal', 'Congestion window is reduced (multiplicative decrease / slow start)', 'Eventually ACK arrives acknowledging receipt of segment N', 'Sender marks N as delivered and slides the send window forward', 'Transmission rate gradually increases again (additive increase phase)'] }
    ]
  }
}
]; // end TOPICS

// ════════════════════════════════════════
// FINAL EXAM DATA
// ════════════════════════════════════════
const FINAL_EXAM = {
  tf: [
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'A binary semaphore can have values greater than 1.', a: false, exp: 'A binary semaphore only has values 0 (in use) and 1 (free). Values greater than 1 are only possible with counting semaphores.' },
    { topic: 'Memory Management', tc: '#10b981', q: 'Thrashing occurs when a process has too many frames allocated to it.', a: false, exp: 'Thrashing occurs when a process has too FEW frames — the OS spends more time swapping pages than executing instructions.' },
    { topic: 'Memory Management', tc: '#10b981', q: 'FIFO is the only common page replacement algorithm susceptible to Belady\'s Anomaly.', a: true, exp: 'Only FIFO exhibits Belady\'s Anomaly — adding more frames can paradoxically increase page faults. LRU, OPT, and Clock do not suffer from it.' },
    { topic: 'Memory Management', tc: '#10b981', q: 'The TLB is a software structure maintained by the OS kernel.', a: false, exp: 'The TLB (Translation Lookaside Buffer) is a hardware cache built into the CPU for fast virtual-to-physical address translation. The OS does not maintain it in software.' },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'SSTF disk scheduling guarantees that no disk request will ever starve.', a: false, exp: 'SSTF always services the nearest request, so distant requests can starve indefinitely if nearby requests keep arriving. SCAN/C-SCAN prevent starvation.' },
    { topic: 'Memory Management', tc: '#10b981', q: 'The Working Set Model prevents thrashing by allocating exactly WSS frames to each process.', a: true, exp: 'WSS = unique pages referenced within window Δ. Allocating exactly that many frames keeps all active pages in memory, eliminating constant page faults.' },
    { topic: 'Distributed Systems', tc: '#8b5cf6', q: 'A Distributed OS requires users to explicitly log in via SSH or use FTP to access remote resources.', a: false, exp: 'That describes a Network OS. A Distributed OS makes remote resources accessible identically to local ones — the distribution is fully transparent to the user.' },
    { topic: 'Embedded Systems', tc: '#ef4444', q: 'Rate Monotonic Scheduling assigns the highest priority to the task with the shortest period.', a: true, exp: 'RMS rule: shorter period = higher rate = higher priority. A task with a 5ms period gets higher priority than one with a 50ms period.' },
    { topic: 'Distributed Systems', tc: '#8b5cf6', q: 'TCP uses a two-way handshake for connection establishment.', a: false, exp: 'TCP uses a THREE-way handshake: SYN → SYN-ACK → ACK. Two messages are not sufficient to establish a reliable bidirectional connection.' },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'Indexed file allocation causes external fragmentation.', a: false, exp: 'Indexed allocation stores data blocks anywhere on disk — no consecutive placement needed — so no external fragmentation. Contiguous allocation causes external fragmentation.' }
  ],
  id: [
    { topic: 'Memory Management', tc: '#10b981', q: 'The OS condition where it spends more time swapping pages than executing process instructions.', a: 'Thrashing' },
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'The semaphore operation that decrements the counter and blocks the calling process if the counter reaches zero.', a: 'wait()' },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'The disk scheduling algorithm that services the request closest to the current head position, minimizing individual seek time.', a: 'SSTF (Shortest Seek Time First)' },
    { topic: 'Embedded Systems', tc: '#ef4444', q: 'The real-time constraint where missing a deadline constitutes the failure itself and can cause physical harm.', a: 'Hard Real-Time' },
    { topic: 'Memory Management', tc: '#10b981', q: 'The hardware cache that stores recent virtual-to-physical address mappings to speed up memory translation.', a: 'TLB (Translation Lookaside Buffer)' },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'The file allocation method that uses a dedicated index block holding all data block pointers, supporting fast random access without external fragmentation.', a: 'Indexed Allocation' },
    { topic: 'Distributed Systems', tc: '#8b5cf6', q: 'The transport protocol providing reliable, connection-oriented, in-order byte-stream delivery via sequence numbers and acknowledgments.', a: 'TCP (Transmission Control Protocol)' },
    { topic: 'Distributed Systems', tc: '#8b5cf6', q: 'The property of a distributed system where it appears as a single centralized system to all users.', a: 'Transparency' },
    { topic: 'Embedded Systems', tc: '#ef4444', q: 'The RTOS scheduling algorithm that assigns the highest fixed priority to the task with the shortest period.', a: 'Rate Monotonic Scheduling (RMS)' },
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'A state where two or more processes are permanently blocked, each waiting for a resource held by another process in the set.', a: 'Deadlock' }
  ],
  essay: [
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'What is the difference between a binary semaphore and a counting semaphore? Give a real-world use case for each.', a: 'A binary semaphore holds only values 0 or 1 and is used for mutual exclusion — ensuring only one process enters a critical section at a time. For example, controlling access to a single printer ensures only one job prints at once: a process calls wait() to acquire the printer (S becomes 0) and signal() to release it (S returns to 1). A counting semaphore can hold any non-negative integer value and is used when multiple instances of a resource are available. For example, if a database server has five connection slots, the semaphore is initialized to 5; each process decrements it on connection and increments it on release, blocking new requests once the count reaches 0 until an existing connection is freed.' },
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'What are the four necessary conditions for deadlock? Explain one strategy to prevent it.', a: 'Deadlock requires all four conditions simultaneously: (1) Mutual Exclusion — a resource can only be held by one process at a time; (2) Hold-and-Wait — a process holds at least one resource while waiting for additional ones; (3) No Preemption — resources cannot be forcibly taken from a process holding them; (4) Circular Wait — a cycle exists where each process waits for a resource held by the next in the cycle. One effective prevention strategy is to eliminate circular wait by imposing a strict global ordering on all resources and requiring every process to request resources only in ascending order of that numbering, making it impossible for a circular dependency to form — no process can hold resource N while waiting for resource M if M < N.' },
    { topic: 'Memory Management', tc: '#10b981', q: 'Compare demand paging and prepaging as memory fetch strategies. What principle of locality makes prepaging effective?', a: 'Demand paging is a reactive fetch strategy that loads a page into RAM only when the process accesses it and triggers a page fault, making it memory-efficient because only genuinely needed pages ever enter RAM, but resulting in frequent faults especially at startup. Prepaging is a predictive strategy that loads multiple pages before they are referenced, reducing page faults during execution. Prepaging is effective because of the principle of spatial locality — programs tend to access memory near recently used addresses, such as reading sequential array elements, so loading adjacent pages just ahead of an actual fault is statistically almost always correct and avoids repeated fault handling overhead.' },
    { topic: 'Embedded Systems', tc: '#ef4444', q: 'What is the difference between Hard Real-Time and Soft Real-Time systems? Give two examples of each and explain the consequences of missing a deadline.', a: 'A hard real-time system is one where missing a deadline constitutes the failure itself — for example, an ABS braking system must respond within 20ms or wheels lock causing loss of steering control, and a pacemaker\'s pulse timing literally equals a heartbeat so a missed pulse is life-threatening. A soft real-time system is one where deadlines are targets rather than absolute constraints — for example, a video stream delivering a late frame produces a stutter but continues functioning, and an online game with a delayed update creates lag but causes no physical harm. The critical distinction is that hard real-time correctness is defined by both output and timing simultaneously, while soft real-time timing affects only quality of experience.' },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'Compare SSTF and SCAN disk scheduling in terms of performance and fairness. Under what condition does starvation occur with SSTF?', a: 'SSTF services whichever pending request is closest to the current head position, minimizing individual seek movements and achieving low average seek time, but it is unfair because requests far from the head are continuously bypassed whenever closer requests keep arriving — this is called starvation. SCAN moves the head in one direction servicing all requests it encounters, then reverses at the disk boundary, providing a balance between performance and fairness since every request is guaranteed service within at most two full head sweeps, preventing indefinite starvation. Starvation with SSTF occurs when a continuous stream of new requests arrives near the head\'s current zone — since SSTF always picks the nearest, it services those arrivals first and may never reach distant requests if the near-track load never abates.' }
  ],
  ps: [
    { topic: 'Concurrent Programming', tc: '#6366f1', q: 'Semaphore S is initialized to 1. Process P1 executes wait(S), then Process P2 executes wait(S). What is the value of S after both operations? What is the state of P2?', a: 'S = 0; P2 is blocked in the waiting queue.', steps: ['S starts at 1 (resource free)', 'P1 executes wait(S): S > 0, so S decrements to 0. P1 enters the critical section.', 'P2 executes wait(S): S = 0 (not > 0), so P2 is BLOCKED and placed in the semaphore\'s waiting queue.', 'Final state: S = 0, P1 is inside the critical section, P2 is suspended.', 'P2 unblocks only when P1 executes signal(S) — S increments to 1 and P2 is woken up.'] },
    { topic: 'Memory Management', tc: '#10b981', q: 'Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. With 3 frames using FIFO replacement, how many page faults occur?', a: '9 page faults', steps: ['1 → [1] FAULT (1)', '2 → [1,2] FAULT (2)', '3 → [1,2,3] FAULT (3)', '4 → [2,3,4] FAULT — evict 1 (4)', '1 → [3,4,1] FAULT — evict 2 (5)', '2 → [4,1,2] FAULT — evict 3 (6)', '5 → [1,2,5] FAULT — evict 4 (7)', '1 → HIT', '2 → HIT', '3 → [2,5,3] FAULT — evict 1 (8)', '4 → [5,3,4] FAULT — evict 2 (9)', '5 → HIT', 'TOTAL: 9 page faults out of 12 references'] },
    { topic: 'Memory Management', tc: '#10b981', q: 'Memory holes (MB): 10, 4, 20, 18, 7, 9, 12, 15. A process needs 12 MB. Which hole is selected by (a) First-Fit and (b) Best-Fit? How much space remains in each case?', a: '(a) First-Fit: 20 MB hole — 8 MB leftover   (b) Best-Fit: 12 MB hole — 0 MB leftover', steps: ['Request size: 12 MB', 'Eligible holes (≥ 12 MB): 20 MB (hole 3), 18 MB (hole 4), 12 MB (hole 7), 15 MB (hole 8)', 'First-Fit: scan from start → 10(no), 4(no), 20(yes) → SELECT 20 MB | Leftover: 20 − 12 = 8 MB', 'Best-Fit: smallest sufficient → 12 MB (exact fit) → SELECT 12 MB | Leftover: 12 − 12 = 0 MB', 'Best-Fit produces no wasted fragment; First-Fit leaves an 8 MB fragment'] },
    { topic: 'Embedded Systems', tc: '#ef4444', q: 'An RTOS has: Task A (period = 5 ms), Task B (period = 15 ms), Task C (period = 30 ms). Using Rate Monotonic Scheduling, assign priorities. If all three become ready simultaneously, which executes first? Last?', a: 'A = Priority 1 (highest), B = Priority 2, C = Priority 3 (lowest). A executes first; C executes last.', steps: ['RMS Rule: shorter period = higher rate = higher priority', 'Task A: 5 ms → PRIORITY 1 (highest — must meet deadline every 5 ms)', 'Task B: 15 ms → PRIORITY 2', 'Task C: 30 ms → PRIORITY 3 (lowest — has the most slack time)', 'All three ready simultaneously → Task A preempts and runs first', 'A completes → Task B runs next', 'B completes → Task C runs last', 'If A\'s next period fires before C finishes, A preempts C again'] },
    { topic: 'File & Disk Management', tc: '#f59e0b', q: 'Disk head is at position 50. Request queue (order of arrival): 95, 180, 34, 119, 11, 123, 62, 64. Calculate total head movement using FCFS scheduling.', a: 'Total = 644 cylinders', steps: ['50 → 95 : |95 − 50| = 45', '95 → 180 : |180 − 95| = 85', '180 → 34 : |34 − 180| = 146', '34 → 119 : |119 − 34| = 85', '119 → 11 : |11 − 119| = 108', '11 → 123 : |123 − 11| = 112', '123 → 62 : |62 − 123| = 61', '62 → 64 : |64 − 62| = 2', 'Total = 45 + 85 + 146 + 85 + 108 + 112 + 61 + 2 = 644 cylinders'] }
  ]
};

// ════════════════════════════════════════
// STATE
// ════════════════════════════════════════
let currentTopic = null;
let currentSection = 'terms';
let currentExamType = 'tf';
let termsSort = 'original';
let examAnswers = {};
let examScore = { correct: 0, total: 0 };
let fcCards = [], fcIndex = 0, fcFlipped = false;
let feAnswers = {}, feScore = { correct: 0, total: 0 };

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
function init() {
  buildSidebar();
  buildHomeGrid();
  buildFCSelect();
  buildMobileTopicSelect();
  renderFinalExam();
  selectTopic('concurrent');
}

function buildSidebar() {
  const sb = document.getElementById('sidebar');
  TOPICS.forEach(t => {
    const b = document.createElement('button');
    b.className = 'topic-btn';
    b.id = 'sb-' + t.id;
    b.innerHTML = `<span class="topic-dot" style="background:${t.color}"></span>${t.name}`;
    b.onclick = () => { selectTopic(t.id); showView('study'); };
    sb.appendChild(b);
  });
}

function buildHomeGrid() {
  const g = document.getElementById('home-grid');
  TOPICS.forEach(t => {
    const c = document.createElement('div');
    c.className = 'topic-card';
    c.innerHTML = `
      <div class="topic-icon">${t.icon}</div>
      <h3>${t.name}</h3>
      <p>${t.terms.length} terms · ${t.outline.length} outline sections</p>
      <div class="topic-stat">${t.exams.tf.length} T/F · ${t.exams.id.length} ID · ${t.exams.essay.length} essays · ${t.exams.ps.length} problems</div>
    `;
    c.onclick = () => { selectTopic(t.id); showView('study'); };
    g.appendChild(c);
  });
}

function buildFCSelect() {
  const sel = document.getElementById('fc-topic-sel');
  sel.innerHTML = '<option value="all">All Topics</option>';
  TOPICS.forEach(t => {
    const o = document.createElement('option');
    o.value = t.id;
    o.textContent = t.icon + ' ' + t.name;
    sel.appendChild(o);
  });
}

function buildMobileTopicSelect() {
  const sel = document.getElementById('mobile-topic-sel');
  TOPICS.forEach(t => {
    const o = document.createElement('option');
    o.value = t.id;
    o.textContent = t.icon + ' ' + t.name;
    sel.appendChild(o);
  });
}

function mobilePick(id) {
  if (!id) return;
  selectTopic(id);
  showView('study');
}

// ════════════════════════════════════════
// VIEWS
// ════════════════════════════════════════
function showView(view) {
  ['home', 'study', 'flashcards', 'finalexam'].forEach(v =>
    document.getElementById('view-' + v).classList.toggle('hidden', v !== view)
  );
  document.querySelectorAll('.nav-btn').forEach((b, i) =>
    b.classList.toggle('active', ['home', 'study', 'flashcards', 'finalexam'][i] === view)
  );
}

function selectTopic(id) {
  currentTopic = TOPICS.find(t => t.id === id);
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  const sb = document.getElementById('sb-' + id);
  if (sb) sb.classList.add('active');
  examAnswers = {};
  examScore = { correct: 0, total: 0 };
  renderTerms();
  renderSlides();
  renderSteps();
  renderExam();
  showSection(currentSection);
  updateScore();
}

function showSection(sec) {
  currentSection = sec;
  ['terms', 'slides', 'steps', 'exam'].forEach(s =>
    document.getElementById('sec-' + s).classList.toggle('hidden', s !== sec)
  );
  document.querySelectorAll('.sec-tab').forEach((b, i) =>
    b.classList.toggle('active', ['terms', 'slides', 'steps', 'exam'][i] === sec)
  );
}

// ════════════════════════════════════════
// TERMS — dictionary UI
// ════════════════════════════════════════
function renderTerms() {
  if (!currentTopic) return;
  termsSort = 'original';
  document.getElementById('sort-original').classList.add('active');
  document.getElementById('sort-az').classList.remove('active');
  buildAlphaBar();
  document.getElementById('alpha-bar').style.display = 'none';
  document.getElementById('term-search').value = '';
  renderTermList(currentTopic.terms, '');
  document.getElementById('terms-count').textContent = currentTopic.terms.length + ' terms';
}

function setTermsSort(sort) {
  termsSort = sort;
  document.getElementById('sort-original').classList.toggle('active', sort === 'original');
  document.getElementById('sort-az').classList.toggle('active', sort === 'az');
  const bar = document.getElementById('alpha-bar');
  bar.style.display = sort === 'az' ? '' : 'none';
  if (sort === 'az') {
    document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.alpha-btn')?.classList.add('active');
  }
  document.getElementById('term-search').value = '';
  renderTermList(currentTopic.terms, '');
  document.getElementById('terms-count').textContent = currentTopic.terms.length + ' terms';
}

function buildAlphaBar() {
  const bar = document.getElementById('alpha-bar');
  bar.innerHTML = '<button class="alpha-btn active" onclick="alphaFilter(this,\'\')">All</button>';
  const letters = [...new Set(currentTopic.terms.map(t => t.term[0].toUpperCase()))].sort();
  letters.forEach(l => {
    const b = document.createElement('button');
    b.className = 'alpha-btn';
    b.textContent = l;
    b.onclick = function () { alphaFilter(this, l); };
    bar.appendChild(b);
  });
}

function alphaFilter(btn, letter) {
  document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('term-search').value = '';
  const filtered = letter
    ? currentTopic.terms.filter(t => t.term[0].toUpperCase() === letter)
    : currentTopic.terms;
  renderTermList(filtered, letter);
  document.getElementById('terms-count').textContent = filtered.length + ' terms';
}

function filterTerms(q) {
  if (!currentTopic) return;
  document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.alpha-btn')?.classList.add('active');
  const ql = q.toLowerCase();
  const filtered = q
    ? currentTopic.terms.filter(t => t.term.toLowerCase().includes(ql) || t.def.toLowerCase().includes(ql))
    : currentTopic.terms;
  renderTermList(filtered, '');
  document.getElementById('terms-count').textContent = filtered.length + ' terms';
}

function renderTermList(terms, groupLetter) {
  const list = document.getElementById('terms-list');
  list.innerHTML = '';
  if (!terms.length) {
    list.innerHTML = '<div style="color:var(--muted);grid-column:1/-1;padding:20px">No terms found.</div>';
    return;
  }
  if (groupLetter) {
    terms.forEach(t => list.appendChild(makeDictCard(t)));
    return;
  }
  if (termsSort === 'az') {
    const groups = {};
    terms.forEach(t => {
      const l = t.term[0].toUpperCase();
      if (!groups[l]) groups[l] = [];
      groups[l].push(t);
    });
    Object.keys(groups).sort().forEach(l => {
      const div = document.createElement('div');
      div.className = 'dict-letter-divider';
      div.textContent = l;
      list.appendChild(div);
      groups[l].forEach(t => list.appendChild(makeDictCard(t)));
    });
  } else {
    terms.forEach(t => list.appendChild(makeDictCard(t)));
  }
}

function makeDictCard(t) {
  const div = document.createElement('div');
  div.className = 'dict-card';
  div.innerHTML = `<div class="dict-term">${t.term}</div><div class="dict-def">${t.def}</div>`;
  return div;
}

// ════════════════════════════════════════
// OUTLINE (replaces Slides)
// ════════════════════════════════════════
function renderSlides() {
  if (!currentTopic) return;
  const container = document.getElementById('slides-container');
  container.innerHTML = '';
  const outline = currentTopic.outline;
  if (!outline || !outline.length) {
    container.innerHTML = '<div style="color:var(--muted);padding:20px">No outline for this topic.</div>';
    return;
  }
  const view = document.createElement('div');
  view.className = 'outline-view';
  outline.forEach(section => {
    const sec = document.createElement('div');
    sec.className = 'outline-section';
    let html = `<div class="outline-title">${section.title}</div>`;
    if (section.desc) html += `<div class="outline-desc">${section.desc}</div>`;
    if (section.items && section.items.length) {
      html += '<ul class="outline-list">';
      section.items.forEach(item => {
        if (item.startsWith('  ')) {
          html += `<li class="outline-item outline-item-sub">${item.trim()}</li>`;
        } else {
          html += `<li class="outline-item">${item}</li>`;
        }
      });
      html += '</ul>';
    }
    sec.innerHTML = html;
    view.appendChild(sec);
  });
  container.appendChild(view);
}

// ════════════════════════════════════════
// STEPS & CALCULATORS
// ════════════════════════════════════════
function renderSteps() {
  if (!currentTopic) return;
  const list = document.getElementById('steps-list');
  list.innerHTML = '';
  currentTopic.steps.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    if (s.isCalc) {
      card.innerHTML = `<div class="step-title">${s.title}</div>` + buildCalc(s.calcType);
    } else {
      const items = s.steps.map((step, i) =>
        `<li><span class="step-num">${String(i + 1).padStart(2, '0')}</span><span class="step-text">${step}</span></li>`
      ).join('');
      card.innerHTML = `<div class="step-title">${s.title}</div><ul class="steps-list">${items}</ul>`;
    }
    list.appendChild(card);
  });
}

function buildCalc(type) {
  if (type === 'bestfit') return `
    <div class="calc-box">
      <h4>Enter hole sizes (comma-separated) and the request size:</h4>
      <div class="calc-input-row">
        <input class="calc-input" id="bf-holes" placeholder="e.g. 10,4,20,18,7,9,12,15" style="flex:2">
        <input class="calc-input" id="bf-req" placeholder="Request (MB)" style="flex:1">
        <button class="calc-btn" onclick="runBestFit()">Calculate</button>
      </div>
      <div class="calc-result" id="bf-result" style="display:none"></div>
    </div>`;
  if (type === 'fifo') return `
    <div class="calc-box">
      <h4>Enter reference string and number of frames:</h4>
      <div class="calc-input-row">
        <input class="calc-input" id="fifo-str" placeholder="e.g. 7,0,1,2,0,3,0,4" style="flex:3">
        <input class="calc-input" id="fifo-frames" placeholder="Frames" style="flex:1">
        <button class="calc-btn" onclick="runFIFO()">Simulate</button>
      </div>
      <div id="fifo-result"></div>
    </div>`;
  if (type === 'disk') return `
    <div class="calc-box">
      <h4>Enter disk requests and starting head position:</h4>
      <div class="calc-input-row">
        <input class="calc-input" id="disk-req" placeholder="e.g. 98,183,37,122,14,124,65,67" style="flex:3">
        <input class="calc-input" id="disk-head" placeholder="Head start" style="flex:1">
        <button class="calc-btn" onclick="runDisk()">Calculate</button>
      </div>
      <div class="calc-result" id="disk-result" style="display:none"></div>
    </div>`;
  return '';
}

function runBestFit() {
  const holes = document.getElementById('bf-holes').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  const req = parseInt(document.getElementById('bf-req').value);
  const el = document.getElementById('bf-result');
  if (!holes.length || isNaN(req)) { el.textContent = 'Please enter valid values.'; el.style.display = 'block'; return; }
  const eligible = holes.map((h, i) => ({ size: h, idx: i })).filter(h => h.size >= req);
  let out = `Request: ${req} MB\nAll holes: [${holes.join(', ')}] MB\nEligible (≥${req} MB): ${eligible.map(h => `${h.size} MB`).join(', ') || 'None'}\n\n`;
  const ff = holes.findIndex(h => h >= req);
  out += ff >= 0 ? `First-Fit  → Hole #${ff + 1} (${holes[ff]} MB) | Leftover: ${holes[ff] - req} MB\n` : `First-Fit  → No suitable hole\n`;
  if (eligible.length) { const bf = eligible.reduce((a, b) => a.size < b.size ? a : b); out += `Best-Fit   → Hole #${bf.idx + 1} (${bf.size} MB) | Leftover: ${bf.size - req} MB\n`; } else out += `Best-Fit   → No suitable hole\n`;
  if (eligible.length) { const wf = eligible.reduce((a, b) => a.size > b.size ? a : b); out += `Worst-Fit  → Hole #${wf.idx + 1} (${wf.size} MB) | Leftover: ${wf.size - req} MB`; } else out += `Worst-Fit  → No suitable hole`;
  el.textContent = out; el.style.display = 'block';
}

function runFIFO() {
  const refs = document.getElementById('fifo-str').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  const frames = parseInt(document.getElementById('fifo-frames').value);
  if (!refs.length || isNaN(frames)) return;
  let memory = [], queue = [], faults = 0, rows = [];
  refs.forEach(page => {
    const hit = memory.includes(page);
    if (!hit) {
      faults++;
      if (memory.length >= frames) { const e = queue.shift(); memory.splice(memory.indexOf(e), 1); }
      memory.push(page); queue.push(page);
    }
    rows.push({ page, mem: [...memory], fault: !hit });
  });
  let html = `<div style="overflow-x:auto;margin-top:12px"><table class="pf-table">
    <tr><th>Ref</th><th>Frames</th><th>Result</th></tr>`;
  rows.forEach(r => {
    html += `<tr><td>${r.page}</td><td style="text-align:left;padding-left:10px">[${r.mem.join(', ')}]</td><td class="${r.fault ? 'fault' : 'hit'}">${r.fault ? 'FAULT' : 'HIT'}</td></tr>`;
  });
  html += `</table></div><div style="margin-top:10px;font-family:'Space Mono',monospace;font-size:13px;color:var(--red)">Total Page Faults: ${faults} / ${refs.length}</div>`;
  document.getElementById('fifo-result').innerHTML = html;
}

function runDisk() {
  const reqs = document.getElementById('disk-req').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  const head = parseInt(document.getElementById('disk-head').value);
  const el = document.getElementById('disk-result');
  if (!reqs.length || isNaN(head)) { el.textContent = 'Please enter valid values.'; el.style.display = 'block'; return; }
  let pos = head, total = 0, out = `Head starts at: ${head}\n\nFCFS Order:\n`;
  reqs.forEach(r => { const d = Math.abs(r - pos); out += `  ${pos} → ${r} : ${d}\n`; total += d; pos = r; });
  out += `\nTotal Head Movement: ${total} cylinders`;
  el.textContent = out; el.style.display = 'block';
}

// ════════════════════════════════════════
// EXAM
// ════════════════════════════════════════
function renderExam() {
  if (!currentTopic) return;
  const e = currentTopic.exams;
  renderTF(e.tf);
  renderID(e.id);
  renderEssay(e.essay);
  renderPS(e.ps);
  showExamType('tf');
}

function showExamType(type) {
  currentExamType = type;
  ['tf', 'id', 'essay', 'ps'].forEach(t =>
    document.getElementById('exam-' + t).classList.toggle('hidden', t !== type)
  );
  document.querySelectorAll('.exam-tab').forEach((b, i) =>
    b.classList.toggle('active', ['tf', 'id', 'essay', 'ps'][i] === type)
  );
}

function renderTF(items) {
  document.getElementById('exam-tf').innerHTML = items.map((q, i) => `
    <div class="q-card" id="tf-card-${i}">
      <div class="q-num">TRUE / FALSE · Q${i + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="tf-options">
        <button class="tf-btn" onclick="answerTF(${i}, true, ${q.a})">TRUE</button>
        <button class="tf-btn" onclick="answerTF(${i}, false, ${q.a})">FALSE</button>
      </div>
      <div class="q-answer" id="tf-exp-${i}">
        <strong>${q.a ? '✓ TRUE' : '✗ FALSE'}</strong> — ${q.exp}
      </div>
    </div>`).join('');
}

function answerTF(i, given, correct) {
  if (examAnswers['tf-' + i] !== undefined) return;
  examAnswers['tf-' + i] = given;
  const isRight = given === correct;
  if (isRight) examScore.correct++;
  examScore.total++;
  const card = document.getElementById('tf-card-' + i);
  card.querySelectorAll('.tf-btn').forEach(b => {
    const v = b.textContent === 'TRUE';
    if (v === correct) b.classList.add('correct');
    else if (v === given && !isRight) b.classList.add('wrong');
    b.disabled = true;
  });
  document.getElementById('tf-exp-' + i).classList.add('show');
  updateScore();
}

function renderID(items) {
  document.getElementById('exam-id').innerHTML = items.map((q, i) => `
    <div class="q-card">
      <div class="q-num">IDENTIFICATION · Q${i + 1}</div>
      <div class="q-text">${q.q}</div>
      <input class="id-input" id="id-inp-${i}" placeholder="Type your answer…"
        onkeydown="if(event.key==='Enter') checkID(${i}, '${q.a.replace(/'/g, "\\'")}')">
      <div style="display:flex;gap:8px">
        <button class="check-btn" onclick="checkID(${i}, '${q.a.replace(/'/g, "\\'")}')">Check</button>
        <button class="reveal-btn" onclick="revealID(${i}, '${q.a.replace(/'/g, "\\'")}')">Reveal</button>
      </div>
      <div class="q-answer" id="id-ans-${i}"><strong>Answer:</strong> ${q.a}</div>
    </div>`).join('');
}

function checkID(i, correct) {
  const inp = document.getElementById('id-inp-' + i);
  const given = inp.value.trim().toLowerCase();
  const ans = correct.toLowerCase();
  const isRight = given.length > 2 && (given === ans || ans.includes(given) || given.includes(ans.split('(')[0].trim()));
  if (examAnswers['id-' + i] === undefined) {
    examAnswers['id-' + i] = given;
    if (isRight) examScore.correct++;
    examScore.total++;
    updateScore();
  }
  inp.style.borderColor = isRight ? 'var(--green)' : 'var(--red)';
  inp.style.color = isRight ? 'var(--green)' : 'var(--red)';
  document.getElementById('id-ans-' + i).classList.add('show');
}

function revealID(i, correct) {
  if (examAnswers['id-' + i] === undefined) { examAnswers['id-' + i] = ''; examScore.total++; updateScore(); }
  document.getElementById('id-ans-' + i).classList.add('show');
}

function renderEssay(items) {
  // Essay: show the question + a complete paragraph answer immediately visible
  document.getElementById('exam-essay').innerHTML = items.map((q, i) => `
    <div class="q-card">
      <div class="q-num">ESSAY · Q${i + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-answer essay-answer show">
        <span class="essay-label">SAMPLE ANSWER</span>
        ${q.a}
      </div>
    </div>`).join('');
}

function renderPS(items) {
  document.getElementById('exam-ps').innerHTML = items.map((q, i) => `
    <div class="q-card">
      <div class="q-num">PROBLEM SOLVING · Q${i + 1}</div>
      <div class="q-text">${q.q}</div>
      <button class="reveal-btn" onclick="revealPS(${i})">Show Solution</button>
      <div class="q-answer" id="ps-ans-${i}">
        <strong>Answer:</strong> ${q.a}
        <ul class="ps-steps" style="margin-top:10px">
          ${q.steps.map((s, j) => `<li><span class="step-n">${j + 1}</span>${s}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');
}

function revealPS(i) { document.getElementById('ps-ans-' + i).classList.add('show'); }

function updateScore() {
  document.getElementById('score-display').textContent = `${examScore.correct} / ${examScore.total}`;
}

function resetExam() {
  examAnswers = {}; examScore = { correct: 0, total: 0 }; updateScore();
  if (currentTopic) renderExam();
}

// ════════════════════════════════════════
// FINAL EXAM
// ════════════════════════════════════════
function tBadge(topic, tc) {
  return `<span class="q-topic-badge" style="background:${tc}22;color:${tc};border:1px solid ${tc}44">${topic}</span>`;
}

function renderFinalExam() {
  // T/F
  document.getElementById('fe-tf').innerHTML = FINAL_EXAM.tf.map((q, i) => `
    <div class="q-card" id="fe-tf-card-${i}">
      <div class="q-num">TRUE / FALSE &middot; Q${i + 1} ${tBadge(q.topic, q.tc)}</div>
      <div class="q-text">${q.q}</div>
      <div class="tf-options">
        <button class="tf-btn" onclick="answerFETF(${i},true,${q.a})">TRUE</button>
        <button class="tf-btn" onclick="answerFETF(${i},false,${q.a})">FALSE</button>
      </div>
      <div class="q-answer" id="fe-tf-exp-${i}"><strong>${q.a ? '✓ TRUE' : '✗ FALSE'}</strong> — ${q.exp}</div>
    </div>`).join('');

  // ID
  document.getElementById('fe-id').innerHTML = FINAL_EXAM.id.map((q, i) => `
    <div class="q-card">
      <div class="q-num">IDENTIFICATION &middot; Q${i + 1} ${tBadge(q.topic, q.tc)}</div>
      <div class="q-text">${q.q}</div>
      <input class="id-input" id="fe-id-inp-${i}" placeholder="Type your answer…"
        onkeydown="if(event.key==='Enter') checkFEID(${i},'${q.a.replace(/'/g, "\\'")}')">
      <div style="display:flex;gap:8px">
        <button class="check-btn" onclick="checkFEID(${i},'${q.a.replace(/'/g, "\\'")}')">Check</button>
        <button class="reveal-btn" onclick="revealFEID(${i})">Reveal</button>
      </div>
      <div class="q-answer" id="fe-id-ans-${i}"><strong>Answer:</strong> ${q.a}</div>
    </div>`).join('');

  // Essay
  document.getElementById('fe-essay').innerHTML = FINAL_EXAM.essay.map((q, i) => `
    <div class="q-card">
      <div class="q-num">ESSAY &middot; Q${i + 1} ${tBadge(q.topic, q.tc)}</div>
      <div class="q-text">${q.q}</div>
      <button class="reveal-btn" onclick="revealFEEssay(${i})">Show Sample Answer</button>
      <div class="q-answer essay-answer" id="fe-essay-ans-${i}">
        <span class="essay-label">SAMPLE ANSWER</span>${q.a}
      </div>
    </div>`).join('');

  // PS
  document.getElementById('fe-ps').innerHTML = FINAL_EXAM.ps.map((q, i) => `
    <div class="q-card">
      <div class="q-num">PROBLEM SOLVING &middot; Q${i + 1} ${tBadge(q.topic, q.tc)}</div>
      <div class="q-text">${q.q}</div>
      <button class="reveal-btn" onclick="revealFEPS(${i})">Show Solution</button>
      <div class="q-answer" id="fe-ps-ans-${i}">
        <strong>Answer:</strong> ${q.a}
        <ul class="ps-steps" style="margin-top:10px">
          ${q.steps.map((s, j) => `<li><span class="step-n">${j + 1}</span>${s}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');

  showFEType('tf');
}

function showFEType(type) {
  ['tf', 'id', 'essay', 'ps'].forEach(t =>
    document.getElementById('fe-' + t).classList.toggle('hidden', t !== type)
  );
  document.querySelectorAll('.fe-tab').forEach((b, i) =>
    b.classList.toggle('active', ['tf', 'id', 'essay', 'ps'][i] === type)
  );
}

function answerFETF(i, given, correct) {
  if (feAnswers['tf-' + i] !== undefined) return;
  feAnswers['tf-' + i] = given;
  const isRight = given === correct;
  if (isRight) feScore.correct++;
  feScore.total++;
  const card = document.getElementById('fe-tf-card-' + i);
  card.querySelectorAll('.tf-btn').forEach(b => {
    const v = b.textContent === 'TRUE';
    if (v === correct) b.classList.add('correct');
    else if (v === given && !isRight) b.classList.add('wrong');
    b.disabled = true;
  });
  document.getElementById('fe-tf-exp-' + i).classList.add('show');
  updateFEScore();
}

function checkFEID(i, correct) {
  const inp = document.getElementById('fe-id-inp-' + i);
  const given = inp.value.trim().toLowerCase();
  const ans = correct.toLowerCase();
  const isRight = given.length > 2 && (given === ans || ans.includes(given) || given.includes(ans.split('(')[0].trim()));
  if (feAnswers['id-' + i] === undefined) {
    feAnswers['id-' + i] = given;
    if (isRight) feScore.correct++;
    feScore.total++;
    updateFEScore();
  }
  inp.style.borderColor = isRight ? 'var(--green)' : 'var(--red)';
  inp.style.color = isRight ? 'var(--green)' : 'var(--red)';
  document.getElementById('fe-id-ans-' + i).classList.add('show');
}

function revealFEID(i) {
  if (feAnswers['id-' + i] === undefined) { feAnswers['id-' + i] = ''; feScore.total++; updateFEScore(); }
  document.getElementById('fe-id-ans-' + i).classList.add('show');
}

function revealFEEssay(i) { document.getElementById('fe-essay-ans-' + i).classList.add('show'); }
function revealFEPS(i) { document.getElementById('fe-ps-ans-' + i).classList.add('show'); }

function updateFEScore() {
  document.getElementById('fe-score-display').textContent = `${feScore.correct} / ${feScore.total}`;
}

function resetFinalExam() {
  feAnswers = {}; feScore = { correct: 0, total: 0 }; updateFEScore();
  renderFinalExam();
}

// ════════════════════════════════════════
// FLASHCARDS
// ════════════════════════════════════════
function loadDefaultCards() {
  const topicId = document.getElementById('fc-topic-sel').value;
  const mode = document.getElementById('fc-mode').value;
  let terms = [];
  if (topicId === 'all') TOPICS.forEach(t => terms.push(...t.terms));
  else { const topic = TOPICS.find(t => t.id === topicId); if (topic) terms = [...topic.terms]; }
  fcCards = terms.map(t => {
    const flip = mode === 'def' || (mode === 'random' && Math.random() > 0.5);
    return { front: flip ? t.def : t.term, back: flip ? t.term : t.def, isAI: false };
  });
  shuffle(fcCards); fcIndex = 0; showFC();
}

async function generateAICards() {
  const topicId = document.getElementById('fc-topic-sel').value;
  const topic = topicId === 'all' ? null : TOPICS.find(t => t.id === topicId);
  const topicName = topic ? topic.name : 'all OS topics (Concurrent Programming, Memory Management, File & Disk Management, Embedded Systems, Distributed Systems)';
  const terms = topic
    ? topic.terms.slice(0, 20).map(t => t.term).join(', ')
    : TOPICS.flatMap(t => t.terms).slice(0, 30).map(t => t.term).join(', ');

  document.getElementById('ai-status').classList.remove('hidden');
  document.getElementById('ai-status-text').textContent = 'Generating AI flashcards…';
  document.getElementById('fc-wrapper').classList.add('hidden');

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Generate 10 flashcards for an Operating Systems exam on: ${topicName}.\nKey terms: ${terms}\n\nReturn ONLY a JSON array, no markdown, no preamble:\n[{"front":"question or term","back":"answer or definition"},...]\n\nMix question types: direct definitions, scenario-based, compare/contrast. Make them exam-difficulty.`
        }]
      })
    });
    const data = await resp.json();
    const text = data.content?.map(c => c.text || '').join('') || '';
    const cards = JSON.parse(text.replace(/```json|```/g, '').trim());
    fcCards = cards.map(c => ({ front: c.front, back: c.back, isAI: true }));
    fcIndex = 0;
    document.getElementById('ai-status').classList.add('hidden');
    showFC();
  } catch (err) {
    document.getElementById('ai-status-text').textContent = '✕ Error generating cards — loading defaults instead.';
    setTimeout(() => { document.getElementById('ai-status').classList.add('hidden'); loadDefaultCards(); }, 1500);
  }
}

function showFC() { document.getElementById('fc-wrapper').classList.remove('hidden'); renderFC(); }

function renderFC() {
  if (!fcCards.length) return;
  const c = fcCards[fcIndex];
  document.getElementById('fc-front-text').textContent = c.front;
  document.getElementById('fc-back-text').textContent = c.back;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${fcCards.length}`;
  document.getElementById('fc-prog').style.width = ((fcIndex + 1) / fcCards.length * 100) + '%';
  fcFlipped = false;
  document.getElementById('fc-card').classList.remove('flipped');
  document.getElementById('fc-ai-badge').innerHTML = c.isAI
    ? '<span class="badge badge-purple">✦ AI GENERATED</span>' : '';
}

function flipCard() { fcFlipped = !fcFlipped; document.getElementById('fc-card').classList.toggle('flipped', fcFlipped); }
function fcNext() { if (fcIndex < fcCards.length - 1) { fcIndex++; renderFC(); } }
function fcPrev() { if (fcIndex > 0) { fcIndex--; renderFC(); } }
function shuffleCards() { shuffle(fcCards); fcIndex = 0; renderFC(); }
function markCard(v) { fcNext(); }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }

// Keyboard nav for flashcards
document.addEventListener('keydown', e => {
  if (document.getElementById('view-flashcards').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') fcNext();
  if (e.key === 'ArrowLeft') fcPrev();
  if (e.key === ' ') { e.preventDefault(); flipCard(); }
});

// ════════════════════════════════════════
// START
// ════════════════════════════════════════
init();