---
title: 「Lecture Notes」MATH 285
date: 2024-03-04 15:09:00 +0800
categories: [Lecture Notes]
tags: [Math,]     # TAG names should always be lowercase
math: true
---

## $\texttt{Introduction}$

### $\texttt{Some Definitions}$

#### $\texttt{Definition (Ordinary Differential Equation, ODE)}$

An ODE of order n has the form

$$\begin{equation}\tag{*}
F(t, \mathbf{y}^{\prime}, \mathbf{y}^{\prime\prime}, \dots, \mathbf{y}^{(n)}) = 0
\end{equation}$$

where $F$ has domain $D\subseteq\mathbb{R}^m\times\mathbb{R}^m\times\underbrace{\mathbb{R}^m\dots\mathbb{R}^m}_{n+1}$.

A solution to $(*)$ is a function (curve) $f : I\to \mathbb{R}^m$, defined on an interval $I\subseteq \mathbb{R}$ of length $> 0$, which is $n$ times differentiable and satisfies $F(t, f^{\prime}(t), f^{\prime\prime}(t), \dots, f^{(n)}(t)) = 0$ for all $t\in I$.

> The solution of n-ordered ODE $f(t, \text C_1, \text C_2, \dots, \text C_n)$ has $n$ arbitrary constants $\text C_1, \text C_2, \dots, \text C_n$ that are independent of each other is called a **general solution** to $(*)$.
> And if the solution doesn't content any constants, we called it a **particular solution**.
{: .prompt-info }

#### $\texttt{Definition (Initial Value Problem, IVP)}$

Suppose that an ODE as above is given and $t_0\in \mathbb{R}, \mathbf{y}_0, \dots, \mathbf{y}_n\in \mathbb{R}^m$ are such that $F(t_0, \mathbf{y}_0, \dots, \mathbf{y}_n) = 0$. A solution to the initial value problem

$$F(t, \mathbf{y}^{\prime}, \mathbf{y}^{\prime\prime}, \dots, \mathbf{y}^{(n)}) = 0,\ \mathbf{y}^{(i)}(t_0) = \mathbf{y}_i\ \ \text{for}\ 0\leqslant i\leqslant n$$

is any function (curve) $f : I \to \mathbb{R}^m$ solving $(*)$ and satisfying $f(t_0) = \mathbf{y}_0,$ $f^{\prime}(t_0) = \mathbf{y}_1, \dots,$ $f^{(n)}(t_0) = \mathbf{y}^{(n)}$.





